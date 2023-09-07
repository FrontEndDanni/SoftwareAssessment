import React, { useEffect, useState } from 'react';

const Artwork = () => {
  const [artwork, setArtwork] = useState({});
  const [loading, setLoading] = useState(false);
  const API_URL =
    'https://collectionapi.metmuseum.org/public/collection/v1/objects?metadataDate=2020-11-11&isOnView=true';

  const fetchRandomArtwork = () => {
    setLoading(true);

    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Extract random object ID
        const randomIndex = Math.floor(Math.random() * data.objectIDs.length);
        const randomObjectID = data.objectIDs[randomIndex];

        // Fetch artwork details using the selected object ID
        fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomObjectID}`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((artData) => {
            // Ensure that the fetched artwork has a primaryImage
            if (artData.primaryImage === undefined) {
              fetchRandomArtwork(); // Fetch another if no image is available
            } else {
              setArtwork(artData);
            }
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching artwork data:', error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.error('Error fetching artwork IDs:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRandomArtwork();
  }, []);

  return (
    <div className="artwork-container">
      <div className="artwork-card">
        <h2>Art Express</h2>
        <button className="button" onClick={fetchRandomArtwork} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Random Artwork'}
        </button>
        {loading ? (
          <p>Loading artwork...</p>
        ) : (
          <div key={artwork.objectID}>
            <h3>{artwork.title || 'No title available'}</h3>
            <p>Artist: {artwork.artistDisplayName || 'Unknown'}</p>
            {artwork.primaryImage && (
              <img
                src={artwork.primaryImage}
                alt={artwork.title || 'Artwork'}
                style={{ width: '100%', maxWidth: '250px', maxHeight: '250px' }}
              />
            )}
          </div>
        )}
      </div>
      <div className="description-box">
        <h2>"Why I Included This API"</h2>
        <p>
          Pretty cool, right? While seemingly off-base from the rest of this project,
          the reason is simple: Being a developer might be a newer chapter in my life,
          but being an artist isn't. I have been holding a pencil, crayon, paintbrush,
          or anything else I could draw with earlier than I can remember.
          <br />
          <br />
          I included this API that fetches a variety of artwork from the Met Museum to
          not only provide examples of the things that inspire me to continue to express
          myself creatively but also to maybe introduce you to a fascinating piece or two
          that you haven't seen before.
        </p>
      </div>
    </div>
  );
};

export default Artwork;
