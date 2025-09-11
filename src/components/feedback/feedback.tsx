import React, { FC } from "react";
import { FeedbackProperties } from "./feedback.type";

export const Feedback: FC<FeedbackProperties> = ({ users }) => {
  return (
    <section className="relative z-20 overflow-hidden pt-22.5  pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0">
        <div className="mb-15 text-center">
          <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
            <img src="./images/hero/icon-title.svg" alt="icon" />
            <span className="hero-subtitle-text">Wall of love</span>
          </span>
          <h2 className="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
            What Our User Says
          </h2>
          <p className="max-w-[714px] mx-auto font-medium">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process more efficient,
            accurate, and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
          {users.map((user) => (
            <div key={user.username} className="space-y-7.5 hidden sm:block">
              <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
                <div className="flex items-center gap-4.5">
                  <div className="max-w-[48px] w-full h-12 rounded-full">
                    <img src={user.imageUrl} alt="user" />
                  </div>
                  <div>
                    <h5 className="text-white text-sm font-medium">
                      {user.name}
                    </h5>
                    <p className="font-medium text-sm">@{user.username}</p>
                  </div>
                </div>

                <div className="user-divider relative my-6 w-full h-[1px]"></div>

                {user.comments.map((comment, idx) => (
                  <p key={idx}>{comment}</p>
                ))}

                <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                  <span className="absolute right-0 bottom-0 -z-1">
                    <img
                      src="./images/blur/blur-18.svg"
                      alt="blur"
                      className="max-w-none"
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
