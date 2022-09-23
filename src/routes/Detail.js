import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(movie);
  return (
    <div>
      <img src={movie.large_cover_image} alt={movie.title} />
      <h1>Detail</h1>
      <h2>Title:{movie.title}</h2>
    </div>
  );
}

export default Detail;
