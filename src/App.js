import { useEffect } from 'react';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const routing = useRoutes(routes);

  function getCharacters() {
    axios.get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        const urls = [];
        const pages = res.data.info.pages;
        for (let i = 1; i < pages; i++) {
          urls.push(
            "https://rickandmortyapi.com/api/character?page=" +
            i
          );
        }

        const getAllData = (urls) => {
          return Promise.all(urls.map(fetchData));
        };

        const fetchData = async (url) => {
          return await axios.get(url)
            .then(res => {
              return {
                data: res.data.results,
              };
            })
            .catch((err) => {
              console.log(err);
            });
        };

        getAllData(urls)
          .then((res) => {
            let result = [];
            res.map((items) => {
              items.data.map((item) => {
                result.push(item);
              })
            })
            localStorage.setItem("charactersList", JSON.stringify(result));
          })
          .catch((e) => {
            console.log(e);
          });
      });
  }

  useEffect(() => {
    if (!localStorage.getItem("charactersList"))
      getCharacters();
  }, []);

  return (
    <div className="App">
      {routing}
    </div>
  );
}

export default App;
