import MainLayout from '../layouts/main'
import TextBlock from '../components/text-block/textBlock'

function about() {

    const texts = [
        {
            "title": "About Yugioh",
            "content": "Yugioh is a trading card game which is originated from an animated series called with the same name in the year 2000."
        },
        {
            "title": "About Our Store",
            "content": "Our store sells various cards."
        },
    ]

    const display = texts.map((text) => {
        return (
            <TextBlock title={text.title} content={text.content}/>
        );
        });

    return (
        <MainLayout>
            {display}
        </MainLayout>
    )
}

export default about
