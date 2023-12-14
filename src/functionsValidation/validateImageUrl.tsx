
const validateImageUrl = (imageURL: string) => {
    const imageUrlRegex = /(https?:\/\/.*\.(?:png|jpg))/i;
    const defaultImageURL = 'https://us.123rf.com/450wm/vmaster2012/vmaster20121309/vmaster2012130900265/22381313-vector-blot-clapper-boards-web-icon-design-element.jpg?ver=6'
    if (imageURL.match(imageUrlRegex)) {
        return imageURL;
    } else {
        return defaultImageURL;
    }
};

export default validateImageUrl;