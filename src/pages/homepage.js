import MainLayout from '../layouts/main'
import Carousel from '../components/carousel/carousel'
import Card from '../components/card/card'

function PageHome({featuredCards}) {
  const displayFeatured = featuredCards.map((card) => {
    return(
      <div key={card.id} className="me-5" style={{userSelect: 'none'}}>
        <Card card={card} extended={false}/>
      </div>
    )
  })
  return (
    <MainLayout>
        <Carousel />
        <div className="display-featured d-flex justify-content-center mt-3">
        { displayFeatured }
        </div>
    </MainLayout>
  );
}
export default PageHome;
