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
      <Route path="/about" element={<TextPage title="About Me" content="Irure enim exercitation reprehenderit aute sint minim amet ea aliqua exercitation. Adipisicing laboris culpa irure pariatur esse laborum pariatur. Ad proident deserunt voluptate veniam sunt exercitation reprehenderit minim. Cillum amet reprehenderit aute cillum. Mollit nisi ea eiusmod et do minim ipsum est eiusmod. Ex consequat fugiat Lorem velit et sit magna.

Minim fugiat consequat quis elit. Culpa incididunt velit minim id. Excepteur commodo dolor reprehenderit ipsum et ea. Veniam ullamco irure dolore ex Lorem minim tempor consectetur cupidatat exercitation sit mollit tempor velit. Nulla sint occaecat nostrud do. Culpa elit in sunt exercitation proident nostrud aute exercitation ipsum nulla proident esse.

In magna excepteur reprehenderit esse enim elit duis elit mollit ipsum dolore magna magna. Reprehenderit exercitation consequat ullamco cupidatat do sunt pariatur amet eu nisi dolore ipsum reprehenderit. Nisi irure id occaecat eu tempor quis aliquip aliquip nostrud eu cupidatat qui commodo in. Nostrud ullamco exercitation Lorem ea veniam sit esse occaecat laboris magna exercitation laborum deserunt. Labore anim voluptate consequat cupidatat velit tempor aliquip duis elit id eiusmod.

Do deserunt culpa ad ut aute voluptate sint magna proident. Reprehenderit adipisicing duis non Lorem adipisicing aliqua laborum do proident anim. Commodo in consectetur amet pariatur cupidatat id eiusmod ipsum velit veniam ex. Amet exercitation esse anim quis dolore duis irure ut. Ullamco exercitation sunt elit do labore excepteur sint dolor.

Occaecat ipsum aliqua consequat non. Non qui consectetur quis cillum commodo ea voluptate ad sint voluptate sit voluptate fugiat. Laborum tempor est veniam voluptate duis esse est laboris ipsum dolor cupidatat voluptate cillum. Irure eiusmod adipisicing adipisicing ut ut veniam consequat non ex. Adipisicing tempor consequat laborum ex sint anim dolore minim ipsum id excepteur. In fugiat aliquip ipsum magna esse sint.

Ex excepteur elit duis mollit ex quis cupidatat sit. Ea nisi eu exercitation do cillum. Ex magna quis quis anim nisi. Nostrud incididunt fugiat minim ad consectetur officia sit ea mollit nisi anim non. Consequat aliquip voluptate cillum sunt eu commodo sunt cillum sit.

Laborum labore aliquip dolore proident non in. Nulla velit amet commodo commodo cillum cillum eu quis adipisicing qui esse minim. Aute laboris dolor aliqua do eu nostrud ut. Proident deserunt adipisicing do cillum sint eiusmod. Et cupidatat sit exercitation pariatur voluptate excepteur fugiat nostrud anim dolore. Elit anim irure velit cillum ut. Nostrud cillum ex non eu sint irure ipsum consequat fugiat fugiat occaecat.

Nostrud anim nisi velit dolore pariatur reprehenderit et laboris proident cupidatat. Dolore in duis cillum in reprehenderit adipisicing. Consectetur sunt ullamco mollit aliquip dolor consequat.

Excepteur dolor voluptate magna est mollit anim est cillum aute qui irure incididunt nostrud. Irure eiusmod cillum aliqua sunt ipsum incididunt in reprehenderit occaecat eiusmod eu est culpa. Enim dolore consectetur ullamco veniam proident amet amet do Lorem. Commodo id ullamco magna eu enim velit aliqua non eu in aliquip mollit. Adipisicing sunt excepteur sint sit culpa do ex occaecat deserunt tempor. Occaecat laboris anim exercitation consequat consectetur do eu. Aliquip consectetur Lorem enim labore adipisicing.

Ad sint aliqua consectetur dolor pariatur non laborum commodo qui aliquip et dolor. Irure do ex consequat adipisicing occaecat magna. Aute exercitation cupidatat incididunt officia ex amet laboris laboris consequat aliqua reprehenderit enim. Pariatur tempor qui dolor laborum ex anim. Qui ad dolor minim laboris. Amet sit nostrud excepteur Lorem amet consequat reprehenderit proident quis nisi." />} />
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
