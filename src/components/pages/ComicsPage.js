import { Helmet } from "react-helmet";
import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";

function ComicsPage() {
  return (
    <>
        <Helmet>
          <meta
              name="description"
              content="Comics list"
              />
          <title>Comics page</title>
        </Helmet>
        <AppBanner/>
        <ComicsList/>
    </>
  )
}

export default ComicsPage;