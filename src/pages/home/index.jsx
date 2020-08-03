import React, { useEffect, useState } from 'react';
import PageLayout from '../../components/PageLayout';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categorias';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInitialData(categoriesWithVideos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <PageLayout paddingAll={0}>
      {initialData.length === 0 && (<div>Loading...</div>)}

      {initialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].titulo}
                url={initialData[0].videos[0].url}
                videoDescription="Não adentre a boa noite apenas com ternura, não entre nessa noite acolhedora com ternura."
              />

              <Carousel
                ignoreFirstVideo
                category={initialData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}

    </PageLayout>
  );
}

export default Home;
