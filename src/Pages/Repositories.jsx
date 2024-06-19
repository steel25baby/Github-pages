import React from "react";
import { VscRepoForked } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";

const Repositories = (
  linkToRepo,
  headerRepo,
  DescriptionRepo,
  forksRepo,
  starsRepo,
) => {
  return (
    <div>
      <div>
        <a href={linkToRepo}>
          <button>
            {/* <p>{headerRepo}</p> */}
            <p>{DescriptionRepo}</p>
            <div>
              <p>
                <VscRepoForked /> {forksRepo} Forks
              </p>
              <p>
                <FaStar /> {starsRepo} Stars
              </p>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Repositories;
