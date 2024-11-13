type TFoodProps = {
    id: string;
    image: string;
    slug: string;
    title: string;
    description: string;
    price: number;
}

export const popularFoods: TFoodProps[] =
    [
        {
            id: "8239z6nzxa9250",
            image: "Tuwo_image.jpg",
            slug: "tuwo-chinkafa-black-soup",
            title: "Tuwo Chinkafa & Black Soup",
            description: "A unique combination of protein and carbohydrate, yam and egg is a delicious food eaten by native Nigerian to get their day started on an elegant note.",
            price: 550.00,
        },
        {
            id: "8239z6nzxa9251",
            image: "Yam_image.jpg",
            slug: "yam-egg-sauce",
            title: "Yam & Egg Sauce",
            description: "A unique combination of protein and carbohydrate, yam and egg is a delicious food eaten by native Nigerian to get their day started on an elegant note.",
            price: 800.00,
        },
        {
            id: "8239z6nzxa9252",
            image: "Akpu_image.jpg",
            slug: "akpu-white-soup",
            title: "Akpu & White Soup",
            description: "White soup is a dish from the Eastern part of Nigeria. It is a rich-soup populated with assorted fish and meat components geared at enhancing the eating experience of whoever takes it on.",
            price: 1200.00,
        },
        {
            id: "8239z6nzxa9253",
            image: "Rice_image.jpg",
            slug: "porridge-beans-friend-yam",
            title: "Porridge Beans & Fried Yam",
            description: "When it comes to a sure fire balanced diet, porridge beans, fried yam with a chilly pepper sauce has been known to bring out the best in people. For an experience of what cloud this combination can take you, try it out with us today.",
            price: 1150.00,
        },
    ]