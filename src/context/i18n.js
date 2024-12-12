import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: 'Blog Posts',
      readMore: 'Read More',
      comments: 'Comments',
      addComment: 'Add a Comment',
    },
  },
  es: {
    translation: {
      title: 'Publicaciones del Blog',
      readMore: 'Leer más',
      comments: 'Comentarios',
      addComment: 'Añadir un comentario',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
