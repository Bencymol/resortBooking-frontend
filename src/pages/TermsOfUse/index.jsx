import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./termsofuse.scss";

const TermsOfUse = () => {
  return (
    <div className="termsofUse">
      <div className="nav-div">
        <Navbar />
      </div>
      <div className="termsDiv">
        <div className="termsHead">
          <h3>Terms Of Use</h3>
          <h5>Terms and Copyright Notices</h5>
        </div>
        <div className="contents">
          <ul>
            <li>
              PLEASE READ THESE BINDING LEGAL TERMS CAREFULLY BEFORE USING THIS
              SITE OR MAKING A RESERVATION.<br></br>
              <br></br>
              BY ACCESSING, USING, VIEWING, TRANSMITTING, CACHING OR STORING
              THIS SITE OR ANY OF ITS SERVICES, FUNCTIONS, MATERIALS, OR
              CONTENTS, YOU SHALL BE DEEMED TO HAVE AGREED TO EACH AND ALL THE
              TERMS, CONDITIONS, AND NOTICES IN THIS SITE ("AGREEMENT") WITHOUT
              MODIFICATION. CERTAIN TERMS, INCLUDING BUT NOT LIMITED TO THE
              ARBITRATION CLAUSE AND CLASS ACTION WAIVER CLAUSE, MAY RESTRICT
              YOUR RIGHTS TO BRING A CLAIM IN A COURT OF LAW. If you are not an
              Authorised User, and if you do not agree to the terms of this
              Agreement, you may not use this Site, including without limitation
              to make a reservation, or download any Materials from it. If you
              do not agree with these terms and conditions, please leave the
              Site immediately.
            </li>
            <li>
              <span style={{ fontWeight: "500" }}>
                COPYRIGHT AND TRADEMARK NOTICES.
              </span>{" "}
              All contents of this Site are the copyrighted property of one of
              the RiverRover companies, or their subsidiaries, affiliates, or an
              RiverRover licensor, as applicable. All contents of this Site are
              protected by United States and international copyright laws.
              InterContinental Hotels Group and RiverRover® Hotels & Resorts are
              trade names describing the subsidiary companies of
              InterContinental Hotels Group PLC involved in the hotel business
              around the world. In the U.S. and Canada, Holiday Hospitality
              Franchising, LLC is the franchisor/licensor of most RiverRover
              brand names and marks. Trademarks owned by an RiverRover company
              may not be used or displayed publicly without the prior written
              permission of the owner of the marks, except for downloaded logos
              and photographs as provided for elsewhere on this Site. Any rights
              not expressly granted herein are reserved.
            </li>
          </ul>
          <h4>COPYRIGHT POLICY</h4>
          <p>
            SCH respects the copyright rights of others and has adopted and
            implemented a policy that provides for (a) the removal of content
            from this Site under appropriate circumstances, and (b) the
            suspension or termination of account holders or subscribers who
            repeatedly infringe the copyright rights of others. If you are a
            copyright owner and you believe your work has been copied in a way
            that constitutes copyright infringement, please contact RiverRover’s
            designated Copyright Agent, as hereafter defined, and provide the
            following information:
          </p>
          <ul className="copy">
            <li>
              A physical or electronic signature of a person authorised to act
              on behalf of the owner of an exclusive right of copyright that is
              allegedly infringed;
            </li>
            <li>
              Identification of the copyrighted work claimed to have been
              infringed or, if multiple copyrighted works at a single online
              site are covered by a single notification, a representative list
              of such works at that site;
            </li>
            <li>
              Identification of the material that is claimed to be infringing or
              to be the subject of infringing activity, and information
              reasonably sufficient to permit us to locate the material;
            </li>
            <li>
              Information reasonably sufficient to permit us to contact the
              complaining party (for example, the complaining party’s physical
              address, email address, and telephone number);
            </li>
            <li>
              A statement that the information in the notification is accurate
              and, under penalty of perjury, that the complaining party is
              authorised to act on behalf of the owner of an exclusive right
              that is allegedly infringed.
            </li>
          </ul>
          <p>
            Notifications of claimed infringement should be directed to the
            RiverRover Copyright Agent as follows:
          </p>
          <div className="copy-agent">
            <p>Copyright Agent</p>
            <p>Six Continents Hotels, Inc.</p>
            <p>Three Ravinia Drive Suite 100 Atlanta,</p>
            <p>GA 30346-2149 </p>
            <p>Email: DMCAcomplaints@rr.com </p>
            <p>Phone: +1 770.604.8760 </p>
            <p>Fax: +1 770.604.2378</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
