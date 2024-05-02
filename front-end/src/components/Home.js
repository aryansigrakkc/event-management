import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventCategory } from "../redux/slice/eventCategorySlice";

const Home = () => {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.eventCategory);
  console.log(getData, "getdatatatata");
  useEffect(() => {
    dispatch(getEventCategory());
  }, []);

  const footerData = {
    companyName: "Event Management System",
    address: "Chhalera gali no-1 sector 44 Noida ",
    phoneNumber: "8604784009",
    email: "aryan@gmail.com",
    socialLinks: [
      { icon: "fa-facebook-f", url: "https://www.facebook.com/example" },
      { icon: "fa-twitter", url: "https://twitter.com/example" },
      { icon: "fa-instagram", url: "https://www.instagram.com/example" },
    ],
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
        style={{ padding: "20px 0" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Services
                </a>
              </li>

              <select className="nav-item">
                <option selected disabled>
                  Event-category
                </option>
                {getData?.data?.data?.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Blog
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="pt-5">
       
      </div>

      <div className="row">
        <div className="col-md-12">
          <div
            id="carouselExampleRide"
            className="carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://media.istockphoto.com/id/942241080/video/footage-of-a-crowd-partying-dancing-slow-motion-at-a-concert.jpg?s=640x640&k=20&c=EKMB9xNL91NEgQWkCoztGh-6pKAKA18L_d8CZO6UlPE="
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://media.istockphoto.com/id/1131098357/photo/audience-watching-soccer-game-in-stadium-at-night.webp?s=2048x2048&w=is&k=20&c=wys2owuywlt9oLn3e2fxUZxJHROwJdy5RivbS6g-Uoo="
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.freeimages.com/images/large-previews/19a/concert-1436178.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        {" "}
        {/* Centering the row */}
        <div className="col-md-6 mt-5">
          <p className="event-text text-center">
            {" "}
            {/* Centering the text */}
            Spark has a diverse team, each offering expert knowledge in their
            field. From strategy planning, budgeting, and comprehensive
            registration support to marketing and branding we bring the most
            current, innovative, and professional market expertise.
          </p>
          <p className="event-text text-center ">
            Our team understands that a properly executed event can be leveraged
            to support an organization’s strategic vision, incorporated into a
            company’s marketing plan, or used to build networks and client
            loyalty.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 img-section imen  d-flex align-items-center justify-content-center  text-white">
          <div className="content-header text-center">
            <h2 className="text-of-event-planning">Event Planning</h2>
            <p className="text-of-passion">is our passion</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {" "}
        {/* Centering the row */}
        <div className="col-md-6 mt-5">
          <p className="event-textt text-center">
            {" "}
            {/* Centering the text */}
            Spark approaches every project with meticulous attention to detail
            and obsessive precision. Regardless of size and scope, we treat your
            event like a business with clear strategic goals, defined
            milestones, and a comprehensive plan to ensure that your event is
            delivered on time and on budget. At Spark, we put your organization
            first. We learn about your business, we focus on your challenges,
            and we plan events to support your goals.
          </p>
        </div>
      </div>
      <div className="row mx-auto">
        <div className="col-6 mx-auto">
          <img src="https://images.squarespace-cdn.com/content/v1/5b2bda42cc8fed2d1f0118d2/1541172884905-HEKQPJY30WNG614Y5Y63/Spark+Website_Experience+Graphic.jpg?format=2500w"></img>
        </div>
      </div>
      <div className="row justify-content-center">
        {" "}
        {/* Centering the row */}
        <div className="col-md-6 mt-5">
          <h1 className="text-for-p text-center">How it Works</h1>
          <p className="text-for-h text-center">
            LEARN: WE WANT TO GET TO KNOW YOU
          </p>
          <p className="event-textt text-center">
            {" "}
            {/* Centering the text */}
            What is your business about? What are your challenges? What are the
            issues that your members or clients are dealing with? By thoroughly
            understanding your company’s leadership culture, how your
            organization operates and your long term strategic plans, we become
            a part of your team. Our model works best when we can become more
            than the “hired help” and can become strategic event management
            partners, so the first step for us is about getting to know you and
            your business
          </p>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        {" "}
        {/* Centering the row */}
        <div className="col-md-6 mt-5">
          <p className="text-for-h text-center">
            BUILD: LET US DO THE HEAVY LIFTING
          </p>
          <p className="event-textt text-center">
            {" "}
            {/* Centering the text */}
            Because we have taken the time to learn about your business and the
            goals of your event, you can rest assured that the event will be on
            target and in line with your objectives. Leave the planning and
            management to us. Let us look after the details and the heavy
            lifting that comes with planning a professional event. From our
            network of preferred vendors, industry connections and years of
            experience, we can deliver a full service event management
            experience. The Spark team is well equipped to deliver a world class
            event, each and every time. Your job is to run your business; our
            job is to run your event.
          </p>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        {" "}
        {/* Centering the row */}
        <div className="col-md-6 mt-5">
          <p className="text-for-h text-center">DELIVER: SIT BACK. RELAX.</p>
          <p className="event-textt text-center">
            {" "}
            {/* Centering the text */}
            Finally, this is where our event management expertise comes into
            play. At our core, we love events. We love the on-site details,
            production plans, schedules, deadlines and to do lists that come
            along with managing an event. From meticulous management of facility
            details to AV, catering and on-site coordination, we ensure every
            detail is looked after. Managing your event using a strategic
            overall plan and a methodical management approach allows you to rest
            easy. Knowing that every last detail is looked after will allow you
            to focus on your attendees and stakeholders at the event. Let us
            look after the rest.
          </p>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        {" "}
        {/* Centering the row */}
        <div className="col-md-6 mt-5">
          <p className="text-for-h text-center">“</p>
          <p className="event-textt text-center">
            {" "}
            {/* Centering the text */}
            Working with the team at Spark has elevated a one-day event into a
            successful two-day summit. Their expertise shines through when it
            comes to program development, speaker fulfillment, tradeshow
            management, sponsorship, marketing, and overall customer service.
            Spark’s professionalism and leadership has transformed the planning
            and execution of our events into a seamless experience.
          </p>
          <p>
            {" "}
            Wayne Morishita, Executive Director, Alberta Energy Efficiency
            Alliance
          </p>
        </div>
      </div>
      <footer className="footer bg-dark text-white py-3 d-flex align-items-center">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h5>{footerData.companyName}</h5>
              <p>{footerData.address}</p>
              <p>Phone: {footerData.phoneNumber}</p>
              <p>Email: {footerData.email}</p>
            </div>
            <div className="col-md-6">
              <ul className="list-inline">
                {footerData.socialLinks.map((link, index) => (
                  <li className="list-inline-item" key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`fab ${link.icon} fa-lg`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
