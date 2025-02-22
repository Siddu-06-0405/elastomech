import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords,author }) => {
//   console.log("SEO Component Rendering:", { title, description, keywords }); // Debugging

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} author={author||""} />
      <meta name="keywords" content={keywords} />
      <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Helmet>
  );
};

export default SEO;
