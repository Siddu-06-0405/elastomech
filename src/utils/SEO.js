import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords }) => {
//   console.log("SEO Component Rendering:", { title, description, keywords }); // Debugging

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Helmet>
  );
};

export default SEO;
