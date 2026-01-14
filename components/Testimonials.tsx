// @ts-nocheck
"use client";

import React from "react";
import { useTranslations } from "next-intl";
import TestimonialBadge from "./testimonials/TestimonialBadge";
import TestimonialHeader from "./testimonials/TestimonialHeader";
import TestimonialCard from "./testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  const t = useTranslations("Testimonials");
  return (
    <div
      className="framer-rk46r framer-U5xvE framer-VU71P framer-uU3P8 framer-25WLk framer-HLcXI framer-090uc framer-72rtr7"
      style={{
        display: "block",
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#000",
      }}
    >
      <div
        className="framer-1wapm98"
        data-framer-name="Bottom Body"
        style={{ display: "block", position: "relative", width: "100%" }}
      >
        <div
          className="framer-be8kg4"
          data-border="true"
          data-framer-name="Testimonials"
          id="testimonial"
        >
          <div className="framer-afy591" data-framer-name="Top Stroke"></div>
          <div className="ssr-variant hidden-121i3k8">
            <div className="framer-1jpog2-container">
              <div className="ssr-variant hidden-s4vk9i">
                <div
                  className="framer-H6PGc framer-uU3P8 framer-090uc framer-25WLk framer-1bpx86w framer-v-1bpx86w"
                  data-framer-name="Big"
                  style={{ width: "100%" }}
                >
                  <TestimonialBadge />
                  <TestimonialHeader />
                </div>
              </div>
              <div className="ssr-variant hidden-72rtr7">
                <div
                  className="framer-H6PGc framer-uU3P8 framer-090uc framer-25WLk framer-1bpx86w framer-v-17gylk"
                  data-framer-name=" Medium"
                  style={{ width: "100%" }}
                >
                  <TestimonialBadge />
                  <TestimonialHeader />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-s4vk9i hidden-72rtr7">
            <div className="framer-1jpog2-container">
              <div
                className="framer-H6PGc framer-uU3P8 framer-090uc framer-25WLk framer-1bpx86w framer-v-ucnkgf"
                data-framer-name="Small"
                style={{ width: "100%" }}
              >
                <TestimonialBadge />
                <TestimonialHeader />
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-121i3k8">
            <div className="framer-tunwzr-container hidden-72rtr7 hidden-s4vk9i">
              <div
                className="framer-pSCgp framer-19i1ycm framer-v-19i1ycm"
                data-framer-name="Default"
                style={{ width: "100%" }}
              >
                <div className="framer-25zn2a-container">
                  <div
                    className="framer-d8W2E framer-25WLk framer-rPfq3 framer-uU3P8 framer-11yok5m framer-v-1mx8etz"
                    data-framer-name="Small"
                    style={{
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      width: "100%",
                    }}
                  >
                    <div
                      className="framer-k8sp7u"
                      data-framer-name="Background Image"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="358"
                          height="268"
                          src="/assets/testimonials/star-blue.svg"
                          alt="Background Image"
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-1hmll9"
                      data-framer-name="Paragraph"
                      style={{
                        outline: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        flexShrink: "0",
                        "--extracted-r6o4lv":
                          "var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182))",
                        "--framer-paragraph-spacing": "0px",
                        transform: "none",
                      }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-11bw1qu"
                        data-styles-preset="JkMvGTmRK"
                        style={{
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182)))",
                        }}
                      >
                        {t('testT1')}
                      </p>
                    </div>
                    <div
                      className="framer-v2a4rq"
                      data-border="true"
                      data-framer-name="Container"
                      style={{
                        "--border-bottom-width": "0px",
                        "--border-color":
                          "var(--token-52be73dd-1bd3-4201-83f2-487c9f21864d, rgb(29, 29, 32))",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                      }}
                    >
                      <div
                        className="framer-uyjebz"
                        data-framer-name="Image"
                        style={{
                          borderBottomLeftRadius: "12px",
                          borderBottomRightRadius: "12px",
                          borderTopLeftRadius: "12px",
                          borderTopRightRadius: "12px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            width="101"
                            height="100"
                            sizes="50px"
                            src="/images/avatar-1.png"
                            alt="Profile Image"
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              objectPosition: "center",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-3ykc4b"
                        data-framer-name="Text Container"
                      >
                        <div
                          className="framer-10vwf67"
                          data-framer-name="Name"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: "0",
                            "--framer-paragraph-spacing": "0px",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-s6vjn9"
                            data-styles-preset="RXF3HUdTY"
                          >
                            {t('person1Name')}
                          </p>
                        </div>
                        <div
                          className="framer-7a2b5"
                          data-framer-name="Text"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: "0",
                            "--extracted-r6o4lv":
                              "var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108))",
                            "--framer-paragraph-spacing": "0px",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-brsdai"
                            data-styles-preset="o9ZJ7wliQ"
                            style={{
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108)))",
                            }}
                          >
                            {t('person1Role')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1farutj-container">
                  <div
                    className="framer-d8W2E framer-25WLk framer-rPfq3 framer-uU3P8 framer-11yok5m framer-v-1mx8etz"
                    data-framer-name="Small"
                    style={{
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      width: "100%",
                    }}
                  >
                    <div
                      className="framer-k8sp7u"
                      data-framer-name="Background Image"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="358"
                          height="268"
                          src="/assets/testimonials/star-blue.svg"
                          alt="Background Image"
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-1hmll9"
                      data-framer-name="Paragraph"
                      style={{
                        outline: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        flexShrink: "0",
                        "--extracted-r6o4lv":
                          "var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182))",
                        "--framer-paragraph-spacing": "0px",
                        transform: "none",
                      }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-11bw1qu"
                        data-styles-preset="JkMvGTmRK"
                        style={{
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182)))",
                        }}
                      >
                        {t('testT2')}
                      </p>
                    </div>
                    <div
                      className="framer-v2a4rq"
                      data-border="true"
                      data-framer-name="Container"
                      style={{
                        "--border-bottom-width": "0px",
                        "--border-color":
                          "var(--token-52be73dd-1bd3-4201-83f2-487c9f21864d, rgb(29, 29, 32))",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                      }}
                    >
                      <div
                        className="framer-uyjebz"
                        data-framer-name="Image"
                        style={{
                          borderBottomLeftRadius: "12px",
                          borderBottomRightRadius: "12px",
                          borderTopLeftRadius: "12px",
                          borderTopRightRadius: "12px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            width="101"
                            height="100"
                            sizes="50px"
                            src="/images/avatar-2.png"
                            alt="Profile Image"
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              objectPosition: "center",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-3ykc4b"
                        data-framer-name="Text Container"
                      >
                        <div
                          className="framer-10vwf67"
                          data-framer-name="Name"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: "0",
                            "--framer-paragraph-spacing": "0px",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-s6vjn9"
                            data-styles-preset="RXF3HUdTY"
                          >
                            {t('person2Name')}
                          </p>
                        </div>
                        <div
                          className="framer-7a2b5"
                          data-framer-name="Text"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: "0",
                            "--extracted-r6o4lv":
                              "var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108))",
                            "--framer-paragraph-spacing": "0px",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-brsdai"
                            data-styles-preset="o9ZJ7wliQ"
                            style={{
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108)))",
                            }}
                          >
                            {t('person2Role')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1itonyf-container">
                  <div
                    className="framer-d8W2E framer-25WLk framer-rPfq3 framer-uU3P8 framer-11yok5m framer-v-1mx8etz"
                    data-framer-name="Small"
                    style={{
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      width: "100%",
                    }}
                  >
                    <div
                      className="framer-k8sp7u"
                      data-framer-name="Background Image"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="358"
                          height="268"
                          src="/assets/testimonials/star-blue.svg"
                          alt="Background Image"
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-1hmll9"
                      data-framer-name="Paragraph"
                      style={{
                        outline: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        flexShrink: "0",
                        "--extracted-r6o4lv":
                          "var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182))",
                        "--framer-paragraph-spacing": "0px",
                        transform: "none",
                      }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-11bw1qu"
                        data-styles-preset="JkMvGTmRK"
                        style={{
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182)))",
                        }}
                      >
                        {t('testT2')}
                      </p>
                    </div>
                    <div
                      className="framer-v2a4rq"
                      data-border="true"
                      data-framer-name="Container"
                      style={{
                        "--border-bottom-width": "0px",
                        "--border-color":
                          "var(--token-52be73dd-1bd3-4201-83f2-487c9f21864d, rgb(29, 29, 32))",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                      }}
                    >
                      <div
                        className="framer-uyjebz"
                        data-framer-name="Image"
                        style={{
                          borderBottomLeftRadius: "12px",
                          borderBottomRightRadius: "12px",
                          borderTopLeftRadius: "12px",
                          borderTopRightRadius: "12px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            width="101"
                            height="100"
                            sizes="50px"
                            src="/images/avatar-3.png"
                            alt
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              objectPosition: "center",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-3ykc4b"
                        data-framer-name="Text Container"
                      >
                        <div
                          className="framer-10vwf67"
                          data-framer-name="Name"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: "0",
                            "--framer-paragraph-spacing": "0px",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-s6vjn9"
                            data-styles-preset="RXF3HUdTY"
                          >
                            {t('person3Name')}
                          </p>
                        </div>
                        <div
                          className="framer-7a2b5"
                          data-framer-name="Text"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: "0",
                            "--extracted-r6o4lv":
                              "var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108))",
                            "--framer-paragraph-spacing": "0px",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-brsdai"
                            data-styles-preset="o9ZJ7wliQ"
                            style={{
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108)))",
                            }}
                          >
                            {t('person3Role')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-voqtsz-container">
                  <div
                    className="framer-d8W2E framer-25WLk framer-rPfq3 framer-uU3P8 framer-11yok5m framer-v-1mx8etz"
                    data-framer-name="Small"
                    style={{
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      width: "100%",
                    }}
                  >
                    <div
                      className="framer-k8sp7u"
                      data-framer-name="Background Image"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="358"
                          height="268"
                          src="/assets/testimonials/star-blue.svg"
                          alt="Background Image"
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-1hmll9"
                      data-framer-name="Paragraph"
                      style={{
                        outline: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        flexShrink: "0",
                        "--extracted-r6o4lv":
                          "var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182))",
                        "--framer-paragraph-spacing": "0px",
                        transform: "none",
                      }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-11bw1qu"
                        data-styles-preset="JkMvGTmRK"
                        style={{
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182)))",
                        }}
                      >
                        {t('testT3')}
                      </p>
                    </div>
                    <div
                      className="framer-v2a4rq"
                      data-border="true"
                      data-framer-name="Container"
                      style={{
                        "--border-bottom-width": "0px",
                        "--border-color":
                          "var(--token-52be73dd-1bd3-4201-83f2-487c9f21864d, rgb(29, 29, 32))",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                      }}
                    >
                      <div
                        className="framer-uyjebz"
                        data-framer-name="Image"
                        style={{
                          borderBottomLeftRadius: "12px",
                          borderBottomRightRadius: "12px",
                          borderTopLeftRadius: "12px",
                          borderTopRightRadius: "12px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="101"
                            height="100"
                            sizes="50px"
                            src="/images/avatar-1.png"
                            alt="Profile Image"
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              objectPosition: "center",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-3ykc4b"
                        data-framer-name="Text Container"
                      >
                        <div
                          className="framer-10vwf67"
                          data-framer-name="Name"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: "0",
                            "--framer-paragraph-spacing": "0px",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-s6vjn9"
                            data-styles-preset="RXF3HUdTY"
                          >
                            {t('person4Name')}
                          </p>
                        </div>
                        <div
                          className="framer-7a2b5"
                          data-framer-name="Text"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: "0",
                            "--extracted-r6o4lv":
                              "var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108))",
                            "--framer-paragraph-spacing": "0px",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-brsdai"
                            data-styles-preset="o9ZJ7wliQ"
                            style={{
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108)))",
                            }}
                          >
                            {t('person4Role')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="framer-111v6q2"
                  data-border="true"
                  data-framer-name="Button"
                  data-highlight="true"
                  style={{
                    "--border-bottom-width": "1px",
                    "--border-color":
                      "var(--token-52be73dd-1bd3-4201-83f2-487c9f21864d, rgb(29, 29, 32))",
                    "--border-left-width": "1px",
                    "--border-right-width": "1px",
                    "--border-style": "solid",
                    "--border-top-width": "1px",
                    backgroundColor:
                      "var(--token-50eedf9f-0fd6-471d-b2ef-04e3433cef55, rgb(14, 14, 16))",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                  tabIndex="0"
                >
                  <div
                    className="framer-1w8jikw"
                    data-framer-name="Text"
                    style={{
                      outline: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      flexShrink: "0",
                      "--extracted-r6o4lv":
                        "var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182))",
                      "--framer-paragraph-spacing": "0px",
                      transform: "none",
                    }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      style={{
                        "--font-selector": "R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==",
                        "--framer-font-family": "&quot",
                        "--framer-font-size": "18px",
                        "--framer-font-weight": "600",
                        "--framer-line-height": "150%",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182)))",
                      }}
                      className="framer-text"
                    >
                      {t('viewAll')}
                    </p>
                  </div>
                  <div className="framer-e47mgg" data-framer-name="Icon">
                    <div
                      style={{
                        position: "absolute",
                        borderRadius: "inherit",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                      }}
                      data-framer-background-image-wrapper="true"
                    >
                      <img
                        decoding="async"
                        loading="lazy"
                        width="20"
                        height="21"
                        src="/assets/testimonials/quote.svg"
                        alt
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          objectPosition: "center",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-s4vk9i hidden-72rtr7">
            <div className="framer-tunwzr-container hidden-72rtr7 hidden-s4vk9i">
              <div
                className="framer-pSCgp framer-19i1ycm framer-v-19i1ycm"
                data-framer-name="Default"
                style={{ width: "100%" }}
              >
                <div className="framer-25zn2a-container">
                  <div
                    className="framer-d8W2E framer-25WLk framer-rPfq3 framer-uU3P8 framer-11yok5m framer-v-1mx8etz"
                    data-framer-name="Small"
                    style={{
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      width: "100%",
                    }}
                  >
                    <div
                      className="framer-k8sp7u"
                      data-framer-name="Background Image"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="358"
                          height="268"
                          src="/assets/testimonials/star-blue.svg"
                          alt="Background Image"
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-1hmll9"
                      data-framer-name="Paragraph"
                      style={{
                        outline: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        flexShrink: "0",
                        "--extracted-r6o4lv":
                          "var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182))",
                        "--framer-paragraph-spacing": "0px",
                        transform: "none",
                      }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-11bw1qu"
                        data-styles-preset="JkMvGTmRK"
                        style={{
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182)))",
                        }}
                      >
                        {t('testT1')}
                      </p>
                    </div>
                    <div
                      className="framer-v2a4rq"
                      data-border="true"
                      data-framer-name="Container"
                      style={{
                        "--border-bottom-width": "0px",
                        "--border-color":
                          "var(--token-52be73dd-1bd3-4201-83f2-487c9f21864d, rgb(29, 29, 32))",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                      }}
                    >
                      <div
                        className="framer-uyjebz"
                        data-framer-name="Image"
                        style={{
                          borderBottomLeftRadius: "12px",
                          borderBottomRightRadius: "12px",
                          borderTopLeftRadius: "12px",
                          borderTopRightRadius: "12px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            width="101"
                            height="100"
                            sizes="50px"
                            src="/images/avatar-1.png"
                            alt="Profile Image"
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              objectPosition: "center",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-3ykc4b"
                        data-framer-name="Text Container"
                      >
                        <div
                          className="framer-10vwf67"
                          data-framer-name="Name"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: "0",
                            "--framer-paragraph-spacing": "0px",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-s6vjn9"
                            data-styles-preset="RXF3HUdTY"
                          >
                            Emma Johnson
                          </p>
                        </div>
                        <div
                          className="framer-7a2b5"
                          data-framer-name="Text"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: "0",
                            "--extracted-r6o4lv":
                              "var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108))",
                            "--framer-paragraph-spacing": "0px",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-brsdai"
                            data-styles-preset="o9ZJ7wliQ"
                            style={{
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108)))",
                            }}
                          >
                            Founder at Specra
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1farutj-container">
                  <div
                    className="framer-d8W2E framer-25WLk framer-rPfq3 framer-uU3P8 framer-11yok5m framer-v-1mx8etz"
                    data-framer-name="Small"
                    style={{
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      width: "100%",
                    }}
                  >
                    <div
                      className="framer-k8sp7u"
                      data-framer-name="Background Image"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="358"
                          height="268"
                          src="/assets/testimonials/star-blue.svg"
                          alt="Background Image"
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-1hmll9"
                      data-framer-name="Paragraph"
                      style={{
                        outline: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        flexShrink: "0",
                        "--extracted-r6o4lv":
                          "var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182))",
                        "--framer-paragraph-spacing": "0px",
                        transform: "none",
                      }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-11bw1qu"
                        data-styles-preset="JkMvGTmRK"
                        style={{
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182)))",
                        }}
                      >
                        {t('testT2')}
                      </p>
                    </div>
                    <div
                      className="framer-v2a4rq"
                      data-border="true"
                      data-framer-name="Container"
                      style={{
                        "--border-bottom-width": "0px",
                        "--border-color":
                          "var(--token-52be73dd-1bd3-4201-83f2-487c9f21864d, rgb(29, 29, 32))",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                      }}
                    >
                      <div
                        className="framer-uyjebz"
                        data-framer-name="Image"
                        style={{
                          borderBottomLeftRadius: "12px",
                          borderBottomRightRadius: "12px",
                          borderTopLeftRadius: "12px",
                          borderTopRightRadius: "12px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            width="101"
                            height="100"
                            sizes="50px"
                            src="/images/avatar-2.png"
                            alt="Profile Image"
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              objectPosition: "center",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-3ykc4b"
                        data-framer-name="Text Container"
                      >
                        <div
                          className="framer-10vwf67"
                          data-framer-name="Name"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: "0",
                            "--framer-paragraph-spacing": "0px",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-s6vjn9"
                            data-styles-preset="RXF3HUdTY"
                          >
                            David Wilson
                          </p>
                        </div>
                        <div
                          className="framer-7a2b5"
                          data-framer-name="Text"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: "0",
                            "--extracted-r6o4lv":
                              "var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108))",
                            "--framer-paragraph-spacing": "0px",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-brsdai"
                            data-styles-preset="o9ZJ7wliQ"
                            style={{
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108)))",
                            }}
                          >
                            Founder at Boom
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1itonyf-container">
                  <div
                    className="framer-d8W2E framer-25WLk framer-rPfq3 framer-uU3P8 framer-11yok5m framer-v-1mx8etz"
                    data-framer-name="Small"
                    style={{
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      width: "100%",
                    }}
                  >
                    <div
                      className="framer-k8sp7u"
                      data-framer-name="Background Image"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="358"
                          height="268"
                          src="/assets/testimonials/star-blue.svg"
                          alt="Background Image"
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-1hmll9"
                      data-framer-name="Paragraph"
                      style={{
                        outline: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        flexShrink: "0",
                        "--extracted-r6o4lv":
                          "var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182))",
                        "--framer-paragraph-spacing": "0px",
                        transform: "none",
                      }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-11bw1qu"
                        data-styles-preset="JkMvGTmRK"
                        style={{
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182)))",
                        }}
                      >
                        {t('testT2')}
                      </p>
                    </div>
                    <div
                      className="framer-v2a4rq"
                      data-border="true"
                      data-framer-name="Container"
                      style={{
                        "--border-bottom-width": "0px",
                        "--border-color":
                          "var(--token-52be73dd-1bd3-4201-83f2-487c9f21864d, rgb(29, 29, 32))",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                      }}
                    >
                      <div
                        className="framer-uyjebz"
                        data-framer-name="Image"
                        style={{
                          borderBottomLeftRadius: "12px",
                          borderBottomRightRadius: "12px",
                          borderTopLeftRadius: "12px",
                          borderTopRightRadius: "12px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            width="101"
                            height="100"
                            sizes="50px"
                            src="/images/avatar-3.png"
                            alt
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              objectPosition: "center",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-3ykc4b"
                        data-framer-name="Text Container"
                      >
                        <div
                          className="framer-10vwf67"
                          data-framer-name="Name"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: "0",
                            "--framer-paragraph-spacing": "0px",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-s6vjn9"
                            data-styles-preset="RXF3HUdTY"
                          >
                            John Doe
                          </p>
                        </div>
                        <div
                          className="framer-7a2b5"
                          data-framer-name="Text"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: "0",
                            "--extracted-r6o4lv":
                              "var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108))",
                            "--framer-paragraph-spacing": "0px",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-brsdai"
                            data-styles-preset="o9ZJ7wliQ"
                            style={{
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108)))",
                            }}
                          >
                            Founder at Nova
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-voqtsz-container">
                  <div
                    className="framer-d8W2E framer-25WLk framer-rPfq3 framer-uU3P8 framer-11yok5m framer-v-1mx8etz"
                    data-framer-name="Small"
                    style={{
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      width: "100%",
                    }}
                  >
                    <div
                      className="framer-k8sp7u"
                      data-framer-name="Background Image"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="358"
                          height="268"
                          src="/assets/testimonials/star-blue.svg"
                          alt="Background Image"
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-1hmll9"
                      data-framer-name="Paragraph"
                      style={{
                        outline: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        flexShrink: "0",
                        "--extracted-r6o4lv":
                          "var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182))",
                        "--framer-paragraph-spacing": "0px",
                        transform: "none",
                      }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-11bw1qu"
                        data-styles-preset="JkMvGTmRK"
                        style={{
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182)))",
                        }}
                      >
                        {t('testT3')}
                      </p>
                    </div>
                    <div
                      className="framer-v2a4rq"
                      data-border="true"
                      data-framer-name="Container"
                      style={{
                        "--border-bottom-width": "0px",
                        "--border-color":
                          "var(--token-52be73dd-1bd3-4201-83f2-487c9f21864d, rgb(29, 29, 32))",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                      }}
                    >
                      <div
                        className="framer-uyjebz"
                        data-framer-name="Image"
                        style={{
                          borderBottomLeftRadius: "12px",
                          borderBottomRightRadius: "12px",
                          borderTopLeftRadius: "12px",
                          borderTopRightRadius: "12px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="101"
                            height="100"
                            sizes="50px"
                            src="/images/avatar-1.png"
                            alt="Profile Image"
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              objectPosition: "center",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-3ykc4b"
                        data-framer-name="Text Container"
                      >
                        <div
                          className="framer-10vwf67"
                          data-framer-name="Name"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: "0",
                            "--framer-paragraph-spacing": "0px",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-s6vjn9"
                            data-styles-preset="RXF3HUdTY"
                          >
                            Laura Martinez
                          </p>
                        </div>
                        <div
                          className="framer-7a2b5"
                          data-framer-name="Text"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: "0",
                            "--extracted-r6o4lv":
                              "var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108))",
                            "--framer-paragraph-spacing": "0px",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-brsdai"
                            data-styles-preset="o9ZJ7wliQ"
                            style={{
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108)))",
                            }}
                          >
                            Founder at Comet
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="framer-111v6q2"
                  data-border="true"
                  data-framer-name="Button"
                  data-highlight="true"
                  style={{
                    "--border-bottom-width": "1px",
                    "--border-color":
                      "var(--token-52be73dd-1bd3-4201-83f2-487c9f21864d, rgb(29, 29, 32))",
                    "--border-left-width": "1px",
                    "--border-right-width": "1px",
                    "--border-style": "solid",
                    "--border-top-width": "1px",
                    backgroundColor:
                      "var(--token-50eedf9f-0fd6-471d-b2ef-04e3433cef55, rgb(14, 14, 16))",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                  tabIndex="0"
                >
                  <div
                    className="framer-1w8jikw"
                    data-framer-name="Text"
                    style={{
                      outline: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      flexShrink: "0",
                      "--extracted-r6o4lv":
                        "var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182))",
                      "--framer-paragraph-spacing": "0px",
                      transform: "none",
                    }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      style={{
                        "--font-selector": "R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==",
                        "--framer-font-family": "&quot",
                        "--framer-font-size": "18px",
                        "--framer-font-weight": "600",
                        "--framer-line-height": "150%",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182)))",
                      }}
                      className="framer-text"
                    >
                      {t('viewAll')}
                    </p>
                  </div>
                  <div className="framer-e47mgg" data-framer-name="Icon">
                    <div
                      style={{
                        position: "absolute",
                        borderRadius: "inherit",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                      }}
                      data-framer-background-image-wrapper="true"
                    >
                      <img
                        decoding="async"
                        loading="lazy"
                        width="20"
                        height="21"
                        src="/assets/testimonials/quote.svg"
                        alt
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          objectPosition: "center",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-gplve6-container hidden-121i3k8">
            <section
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                maxWidth: "100%",
                maxHeight: "100%",
                placeItems: "center",
                margin: "0",
                padding: "0px",
                listStyleType: "none",
                textIndent: "none",
                opacity: "1",
                WebkitMaskImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
                MozMaskImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
                maskImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
                overflow: "hidden",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  placeItems: "center",
                  margin: "0",
                  padding: "0",
                  listStyleType: "none",
                  textIndent: "none",
                  gap: "20px",
                  position: "relative",
                  flexDirection: "row",
                  willChange: "transform",
                  transform: "translateX(-0px)",
                }}
              >
                <li style={{ height: "268px" }}>
                  <div
                    className="framer-k7tck2-container"
                    style={{ height: "268px", flexShrink: "0" }}
                  >
                    <div
                      className="framer-d8W2E framer-25WLk framer-rPfq3 framer-uU3P8 framer-11yok5m framer-v-11yok5m"
                      data-framer-name="Big"
                      style={{
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                      }}
                    >
                      <div
                        className="framer-k8sp7u"
                        data-framer-name="Background Image"
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            width="388"
                            height="295"
                            src="/assets/testimonials/star-yellow.svg"
                            alt="Background Image"
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              objectPosition: "center",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-1hmll9"
                        data-framer-name="Paragraph"
                        style={{
                          outline: "none",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          flexShrink: "0",
                          "--extracted-r6o4lv":
                            "var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182))",
                          "--framer-paragraph-spacing": "0px",
                          transform: "none",
                        }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-11bw1qu"
                          data-styles-preset="JkMvGTmRK"
                          style={{
                            "--framer-text-alignment": "left",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182)))",
                          }}
                        >
                          {t('testT1')}
                        </p>
                      </div>
                      <div
                        className="framer-v2a4rq"
                        data-border="true"
                        data-framer-name="Container"
                        style={{
                          "--border-bottom-width": "0px",
                          "--border-color":
                            "var(--token-52be73dd-1bd3-4201-83f2-487c9f21864d, rgb(29, 29, 32))",
                          "--border-left-width": "0px",
                          "--border-right-width": "0px",
                          "--border-style": "solid",
                          "--border-top-width": "1px",
                        }}
                      >
                        <div
                          className="framer-uyjebz"
                          data-framer-name="Image"
                          style={{
                            borderBottomLeftRadius: "12px",
                            borderBottomRightRadius: "12px",
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="100"
                              height="100"
                              sizes="50px"
                              src="/images/avatar-1.png"
                              alt="Profile Image"
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-3ykc4b"
                          data-framer-name="Text Container"
                        >
                          <div
                            className="framer-10vwf67"
                            data-framer-name="Name"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: "0",
                              "--framer-paragraph-spacing": "0px",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-s6vjn9"
                              data-styles-preset="RXF3HUdTY"
                            >
                              Emma Johnson
                            </p>
                          </div>
                          <div
                            className="framer-7a2b5"
                            data-framer-name="Text"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: "0",
                              "--extracted-r6o4lv":
                                "var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108))",
                              "--framer-paragraph-spacing": "0px",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-brsdai"
                              data-styles-preset="o9ZJ7wliQ"
                              style={{
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108)))",
                              }}
                            >
                              Founder at Specra
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li style={{ height: "268px" }}>
                  <div
                    className="framer-1kzghf9-container"
                    style={{ height: "268px", flexShrink: "0" }}
                  >
                    <div
                      className="framer-d8W2E framer-25WLk framer-rPfq3 framer-uU3P8 framer-11yok5m framer-v-11yok5m"
                      data-framer-name="Big"
                      style={{
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                      }}
                    >
                      <div
                        className="framer-k8sp7u"
                        data-framer-name="Background Image"
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            width="388"
                            height="295"
                            src="/assets/testimonials/star-yellow.svg"
                            alt="Background Image"
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              objectPosition: "center",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-1hmll9"
                        data-framer-name="Paragraph"
                        style={{
                          outline: "none",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          flexShrink: "0",
                          "--extracted-r6o4lv":
                            "var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182))",
                          "--framer-paragraph-spacing": "0px",
                          transform: "none",
                        }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-11bw1qu"
                          data-styles-preset="JkMvGTmRK"
                          style={{
                            "--framer-text-alignment": "left",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182)))",
                          }}
                        >
                          {t('testT4')}
                        </p>
                      </div>
                      <div
                        className="framer-v2a4rq"
                        data-border="true"
                        data-framer-name="Container"
                        style={{
                          "--border-bottom-width": "0px",
                          "--border-color":
                            "var(--token-52be73dd-1bd3-4201-83f2-487c9f21864d, rgb(29, 29, 32))",
                          "--border-left-width": "0px",
                          "--border-right-width": "0px",
                          "--border-style": "solid",
                          "--border-top-width": "1px",
                        }}
                      >
                        <div
                          className="framer-uyjebz"
                          data-framer-name="Image"
                          style={{
                            borderBottomLeftRadius: "12px",
                            borderBottomRightRadius: "12px",
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="101"
                              height="100"
                              sizes="50px"
                              src="/images/avatar-3.png"
                              alt
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-3ykc4b"
                          data-framer-name="Text Container"
                        >
                          <div
                            className="framer-10vwf67"
                            data-framer-name="Name"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: "0",
                              "--framer-paragraph-spacing": "0px",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-s6vjn9"
                              data-styles-preset="RXF3HUdTY"
                            >
                              {t('person3Name')}
                            </p>
                          </div>
                          <div
                            className="framer-7a2b5"
                            data-framer-name="Text"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: "0",
                              "--extracted-r6o4lv":
                                "var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108))",
                              "--framer-paragraph-spacing": "0px",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-brsdai"
                              data-styles-preset="o9ZJ7wliQ"
                              style={{
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108)))",
                              }}
                            >
                              {t('person3Role')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li style={{ height: "268px" }}>
                  <div
                    className="framer-k0rf8d-container"
                    style={{ height: "268px", flexShrink: "0" }}
                  >
                    <div
                      className="framer-d8W2E framer-25WLk framer-rPfq3 framer-uU3P8 framer-11yok5m framer-v-11yok5m"
                      data-framer-name="Big"
                      style={{
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                      }}
                    >
                      <div
                        className="framer-k8sp7u"
                        data-framer-name="Background Image"
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            width="388"
                            height="295"
                            src="/assets/testimonials/star-yellow.svg"
                            alt="Background Image"
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              objectPosition: "center",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-1hmll9"
                        data-framer-name="Paragraph"
                        style={{
                          outline: "none",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          flexShrink: "0",
                          "--extracted-r6o4lv":
                            "var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182))",
                          "--framer-paragraph-spacing": "0px",
                          transform: "none",
                        }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-11bw1qu"
                          data-styles-preset="JkMvGTmRK"
                          style={{
                            "--framer-text-alignment": "left",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182)))",
                          }}
                        >
                          {t('testT5')}
                        </p>
                      </div>
                      <div
                        className="framer-v2a4rq"
                        data-border="true"
                        data-framer-name="Container"
                        style={{
                          "--border-bottom-width": "0px",
                          "--border-color":
                            "var(--token-52be73dd-1bd3-4201-83f2-487c9f21864d, rgb(29, 29, 32))",
                          "--border-left-width": "0px",
                          "--border-right-width": "0px",
                          "--border-style": "solid",
                          "--border-top-width": "1px",
                        }}
                      >
                        <div
                          className="framer-uyjebz"
                          data-framer-name="Image"
                          style={{
                            borderBottomLeftRadius: "12px",
                            borderBottomRightRadius: "12px",
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="101"
                              height="100"
                              sizes="50px"
                              src="/images/avatar-3.png"
                              alt="Profile Image"
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-3ykc4b"
                          data-framer-name="Text Container"
                        >
                          <div
                            className="framer-10vwf67"
                            data-framer-name="Name"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: "0",
                              "--framer-paragraph-spacing": "0px",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-s6vjn9"
                              data-styles-preset="RXF3HUdTY"
                            >
                              {t('person5Name')}
                            </p>
                          </div>
                          <div
                            className="framer-7a2b5"
                            data-framer-name="Text"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: "0",
                              "--extracted-r6o4lv":
                                "var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108))",
                              "--framer-paragraph-spacing": "0px",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-brsdai"
                              data-styles-preset="o9ZJ7wliQ"
                              style={{
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108)))",
                              }}
                            >
                              {t('person5Role')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li style={{ height: "268px" }}>
                  <div
                    className="framer-1prqlxf-container"
                    style={{ height: "268px", flexShrink: "0" }}
                  >
                    <div
                      className="framer-d8W2E framer-25WLk framer-rPfq3 framer-uU3P8 framer-11yok5m framer-v-11yok5m"
                      data-framer-name="Big"
                      style={{
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                      }}
                    >
                      <div
                        className="framer-k8sp7u"
                        data-framer-name="Background Image"
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            width="388"
                            height="295"
                            src="/assets/testimonials/star-yellow.svg"
                            alt="Background Image"
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              objectPosition: "center",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-1hmll9"
                        data-framer-name="Paragraph"
                        style={{
                          outline: "none",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          flexShrink: "0",
                          "--extracted-r6o4lv":
                            "var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182))",
                          "--framer-paragraph-spacing": "0px",
                          transform: "none",
                        }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-11bw1qu"
                          data-styles-preset="JkMvGTmRK"
                          style={{
                            "--framer-text-alignment": "left",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182)))",
                          }}
                        >
                          {t('testT6')}
                        </p>
                      </div>
                      <div
                        className="framer-v2a4rq"
                        data-border="true"
                        data-framer-name="Container"
                        style={{
                          "--border-bottom-width": "0px",
                          "--border-color":
                            "var(--token-52be73dd-1bd3-4201-83f2-487c9f21864d, rgb(29, 29, 32))",
                          "--border-left-width": "0px",
                          "--border-right-width": "0px",
                          "--border-style": "solid",
                          "--border-top-width": "1px",
                        }}
                      >
                        <div
                          className="framer-uyjebz"
                          data-framer-name="Image"
                          style={{
                            borderBottomLeftRadius: "12px",
                            borderBottomRightRadius: "12px",
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="101"
                              height="100"
                              sizes="50px"
                              src="/images/avatar-2.png"
                              alt="Profile Image"
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-3ykc4b"
                          data-framer-name="Text Container"
                        >
                          <div
                            className="framer-10vwf67"
                            data-framer-name="Name"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: "0",
                              "--framer-paragraph-spacing": "0px",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-s6vjn9"
                              data-styles-preset="RXF3HUdTY"
                            >
                              {t('person6Name')}
                            </p>
                          </div>
                          <div
                            className="framer-7a2b5"
                            data-framer-name="Text"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: "0",
                              "--extracted-r6o4lv":
                                "var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108))",
                              "--framer-paragraph-spacing": "0px",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-brsdai"
                              data-styles-preset="o9ZJ7wliQ"
                              style={{
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108)))",
                              }}
                            >
                              {t('person6Role')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li style={{ height: "268px" }}>
                  <div
                    className="framer-17c91q3-container"
                    style={{ height: "268px", flexShrink: "0" }}
                  >
                    <div
                      className="framer-d8W2E framer-25WLk framer-rPfq3 framer-uU3P8 framer-11yok5m framer-v-11yok5m"
                      data-framer-name="Big"
                      style={{
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                      }}
                    >
                      <div
                        className="framer-k8sp7u"
                        data-framer-name="Background Image"
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            width="388"
                            height="295"
                            src="/assets/testimonials/star-yellow.svg"
                            alt="Background Image"
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              objectPosition: "center",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-1hmll9"
                        data-framer-name="Paragraph"
                        style={{
                          outline: "none",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          flexShrink: "0",
                          "--extracted-r6o4lv":
                            "var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182))",
                          "--framer-paragraph-spacing": "0px",
                          transform: "none",
                        }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-11bw1qu"
                          data-styles-preset="JkMvGTmRK"
                          style={{
                            "--framer-text-alignment": "left",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182)))",
                          }}
                        >
                          {t('testT2')}
                        </p>
                      </div>
                      <div
                        className="framer-v2a4rq"
                        data-border="true"
                        data-framer-name="Container"
                        style={{
                          "--border-bottom-width": "0px",
                          "--border-color":
                            "var(--token-52be73dd-1bd3-4201-83f2-487c9f21864d, rgb(29, 29, 32))",
                          "--border-left-width": "0px",
                          "--border-right-width": "0px",
                          "--border-style": "solid",
                          "--border-top-width": "1px",
                        }}
                      >
                        <div
                          className="framer-uyjebz"
                          data-framer-name="Image"
                          style={{
                            borderBottomLeftRadius: "12px",
                            borderBottomRightRadius: "12px",
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="101"
                              height="100"
                              sizes="50px"
                              src="/images/avatar-2.png"
                              alt="Profile Image"
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-3ykc4b"
                          data-framer-name="Text Container"
                        >
                          <div
                            className="framer-10vwf67"
                            data-framer-name="Name"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: "0",
                              "--framer-paragraph-spacing": "0px",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-s6vjn9"
                              data-styles-preset="RXF3HUdTY"
                            >
                              David Wilson
                            </p>
                          </div>
                          <div
                            className="framer-7a2b5"
                            data-framer-name="Text"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: "0",
                              "--extracted-r6o4lv":
                                "var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108))",
                              "--framer-paragraph-spacing": "0px",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-brsdai"
                              data-styles-preset="o9ZJ7wliQ"
                              style={{
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108)))",
                              }}
                            >
                              Founder at Boom
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li style={{ height: "268px" }}>
                  <div
                    className="framer-r01kya-container"
                    style={{ height: "268px", flexShrink: "0" }}
                  >
                    <div
                      className="framer-d8W2E framer-25WLk framer-rPfq3 framer-uU3P8 framer-11yok5m framer-v-11yok5m"
                      data-framer-name="Big"
                      style={{
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                      }}
                    >
                      <div
                        className="framer-k8sp7u"
                        data-framer-name="Background Image"
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            width="388"
                            height="295"
                            src="/assets/testimonials/star-yellow.svg"
                            alt="Background Image"
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              objectPosition: "center",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-1hmll9"
                        data-framer-name="Paragraph"
                        style={{
                          outline: "none",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          flexShrink: "0",
                          "--extracted-r6o4lv":
                            "var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182))",
                          "--framer-paragraph-spacing": "0px",
                          transform: "none",
                        }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-11bw1qu"
                          data-styles-preset="JkMvGTmRK"
                          style={{
                            "--framer-text-alignment": "left",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182)))",
                          }}
                        >
                          {t('testT3')}
                        </p>
                      </div>
                      <div
                        className="framer-v2a4rq"
                        data-border="true"
                        data-framer-name="Container"
                        style={{
                          "--border-bottom-width": "0px",
                          "--border-color":
                            "var(--token-52be73dd-1bd3-4201-83f2-487c9f21864d, rgb(29, 29, 32))",
                          "--border-left-width": "0px",
                          "--border-right-width": "0px",
                          "--border-style": "solid",
                          "--border-top-width": "1px",
                        }}
                      >
                        <div
                          className="framer-uyjebz"
                          data-framer-name="Image"
                          style={{
                            borderBottomLeftRadius: "12px",
                            borderBottomRightRadius: "12px",
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="100"
                              height="100"
                              sizes="50px"
                              src="/images/avatar-1.png"
                              alt="Profile Image"
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-3ykc4b"
                          data-framer-name="Text Container"
                        >
                          <div
                            className="framer-10vwf67"
                            data-framer-name="Name"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: "0",
                              "--framer-paragraph-spacing": "0px",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-s6vjn9"
                              data-styles-preset="RXF3HUdTY"
                            >
                              Laura Martinez
                            </p>
                          </div>
                          <div
                            className="framer-7a2b5"
                            data-framer-name="Text"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: "0",
                              "--extracted-r6o4lv":
                                "var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108))",
                              "--framer-paragraph-spacing": "0px",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-brsdai"
                              data-styles-preset="o9ZJ7wliQ"
                              style={{
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108)))",
                              }}
                            >
                              Founder at Comet
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li style={{ height: "268px" }}>
                  <div
                    className="framer-1lb9ywu-container"
                    style={{ height: "268px", flexShrink: "0" }}
                  >
                    <div
                      className="framer-d8W2E framer-25WLk framer-rPfq3 framer-uU3P8 framer-11yok5m framer-v-11yok5m"
                      data-framer-name="Big"
                      style={{
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                      }}
                    >
                      <div
                        className="framer-k8sp7u"
                        data-framer-name="Background Image"
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            width="388"
                            height="295"
                            src="/assets/testimonials/star-yellow.svg"
                            alt="Background Image"
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              objectPosition: "center",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-1hmll9"
                        data-framer-name="Paragraph"
                        style={{
                          outline: "none",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          flexShrink: "0",
                          "--extracted-r6o4lv":
                            "var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182))",
                          "--framer-paragraph-spacing": "0px",
                          transform: "none",
                        }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-11bw1qu"
                          data-styles-preset="JkMvGTmRK"
                          style={{
                            "--framer-text-alignment": "left",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-525d93f6-910e-4504-8203-8f2f42ec0b44, rgb(174, 176, 182)))",
                          }}
                        >
                          {t('testT6')}
                        </p>
                      </div>
                      <div
                        className="framer-v2a4rq"
                        data-border="true"
                        data-framer-name="Container"
                        style={{
                          "--border-bottom-width": "0px",
                          "--border-color":
                            "var(--token-52be73dd-1bd3-4201-83f2-487c9f21864d, rgb(29, 29, 32))",
                          "--border-left-width": "0px",
                          "--border-right-width": "0px",
                          "--border-style": "solid",
                          "--border-top-width": "1px",
                        }}
                      >
                        <div
                          className="framer-uyjebz"
                          data-framer-name="Image"
                          style={{
                            borderBottomLeftRadius: "12px",
                            borderBottomRightRadius: "12px",
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="101"
                              height="100"
                              sizes="50px"
                              src="/images/avatar-1.png"
                              alt="Profile Image"
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-3ykc4b"
                          data-framer-name="Text Container"
                        >
                          <div
                            className="framer-10vwf67"
                            data-framer-name="Name"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: "0",
                              "--framer-paragraph-spacing": "0px",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-s6vjn9"
                              data-styles-preset="RXF3HUdTY"
                            >
                              {t('person7Name')}
                            </p>
                          </div>
                          <div
                            className="framer-7a2b5"
                            data-framer-name="Text"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: "0",
                              "--extracted-r6o4lv":
                                "var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108))",
                              "--framer-paragraph-spacing": "0px",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-brsdai"
                              data-styles-preset="o9ZJ7wliQ"
                              style={{
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-66d392a4-a6be-4352-b23d-eaf3165fbec9, rgb(98, 100, 108)))",
                              }}
                            >
                              {t('person7Role')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Testimonials;
