// AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import BlogPage from "../pages/BlogPage";
import Portfolio from "../pages/Portfolio";
import NotFound from "../pages/NotFound";
import TextPage from "../pages/TextPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route
        path="/blog/firstpost"
        element={
          <BlogPage
            details={{
              image: "https://picsum.photos/300/200",
              title: "First Post",
              content:
                "What's Up, y'all? \n My name's Tanner Ordonez, and I'm the founder of LyOPix Coding. If you ever have anything you thing i could help you with, I'm open to suggestions!",
              author: "Tanner Ordonez",
              date: new Date().toLocaleDateString(),
            }}
          />
        }
      />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/legal/terms"
        element={
          <TextPage
            title="Terms and Conditions"
            content="Some fun legal stuff"
          />
        }
      />
      <Route
        path="/legal/privacy"
        element={
          <TextPage
            title="Privacy Policy"
            content="Incididunt tempor consequat sit laboris commodo ipsum. Cillum magna dolor fugiat est occaecat reprehenderit culpa consectetur. Excepteur fugiat culpa voluptate nostrud. In id officia cillum eiusmod ut. Nulla minim reprehenderit fugiat aliquip.

Eu amet consequat ut dolor non duis dolore reprehenderit cillum officia. Nostrud est proident ex velit occaecat elit sint cupidatat dolor nisi anim qui. Aliquip pariatur eiusmod quis irure quis et deserunt eu esse esse culpa veniam do qui.

Anim elit magna irure Lorem elit esse ullamco sunt dolor irure mollit aute. Excepteur nostrud sint pariatur consectetur eiusmod duis reprehenderit do et aute excepteur incididunt. Ea ad officia pariatur quis quis sit aute cillum mollit. Tempor officia excepteur consequat non aliquip ut mollit commodo commodo ipsum nisi. Amet reprehenderit duis laboris exercitation incididunt deserunt laborum velit minim eiusmod non. Voluptate aute est ut velit.

Sint ex do consectetur eu esse velit officia. Aliqua voluptate et irure aliquip enim nulla reprehenderit minim minim. Mollit nisi reprehenderit consectetur reprehenderit duis occaecat enim occaecat anim et aute.

Ipsum esse in esse aliqua ad eiusmod qui adipisicing officia ut nostrud. Nisi occaecat ad irure incididunt anim ad aliquip. Elit ipsum duis et occaecat Lorem magna in. Consequat et pariatur magna enim consequat dolore in anim est tempor velit aute qui tempor. Pariatur ad dolore ad eiusmod exercitation enim. Est sunt dolor amet velit pariatur irure duis aute do exercitation.

Occaecat dolor adipisicing ut nulla laborum labore ipsum anim quis ex pariatur velit eiusmod. Irure magna in esse ea Lorem mollit minim nisi exercitation culpa laboris anim mollit voluptate. Consectetur incididunt sunt culpa do anim officia sunt. Amet duis sunt ut esse ullamco dolore eiusmod est anim duis nisi aliqua. Consectetur excepteur pariatur amet officia laboris adipisicing mollit enim quis pariatur in excepteur.

Pariatur deserunt aute nisi mollit quis nostrud ea ipsum consectetur do voluptate. Dolor culpa dolor ut elit minim ad labore incididunt minim nostrud. Mollit ad sint in quis pariatur laboris tempor officia reprehenderit nostrud nulla.

Duis mollit enim qui elit amet aliquip dolor aliquip laborum dolor proident. Lorem ullamco mollit nulla irure. Labore dolore proident pariatur aute consequat qui non consequat minim cillum. Culpa consectetur reprehenderit pariatur amet dolor id enim.

Elit reprehenderit cillum qui enim velit nostrud sunt consectetur. Incididunt non ut enim cillum aute qui sunt minim proident. Quis sint velit duis nulla nulla in deserunt proident labore id magna anim proident deserunt.

Id quis amet nostrud qui voluptate. Dolor sit ex officia pariatur adipisicing eu duis quis deserunt occaecat cillum ea. Dolor cillum quis magna eiusmod do cillum ea officia consectetur. Do incididunt nulla nisi qui Lorem labore eu non dolore enim ex et excepteur. Cupidatat est ipsum reprehenderit laboris incididunt mollit ullamco ullamco cillum deserunt commodo consequat."
          />
        }
      />
    </Routes>
  );
}
