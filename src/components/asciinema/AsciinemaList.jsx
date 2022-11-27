import * as React from "react";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Link } from "gatsby";
import { getTitle, formatDate } from "../../utils/tools";
import ContentPasteGo from "@mui/icons-material/ContentPasteGo";

const AsciinemaList = ({ pageContext }) => {
  return (
    <div>
      <Navbar />
      <main className="p-24 min-h-[500px]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-12 items-center justify-center">
            <div>
              <ContentPasteGo sx={{ fontSize: "2.0rem" }} />
            </div>
            <h2>Asciinema list</h2>
          </div>
          {/* <p>{JSON.stringify(pageContext.asciinemas, null, 2)}</p> */}
          {pageContext.asciinemas.map((ascii, index) => {
            const content = JSON.parse(ascii.content);
            const title = getTitle(content);
            return (
              <div key={ascii.ID}>
                <span className="text-gray-600 font-semibold text-sm">
                  {index + 1}:
                </span>
                <Link to={`/asciinema/${ascii.ID}`}> {getTitle(content)}</Link>
                <span className="pl-2 text-xs text-gray-500">
                  {formatDate(new Date(ascii.CreatedAt), "yyyy-mm-dd HH:MM")}
                </span>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AsciinemaList;
