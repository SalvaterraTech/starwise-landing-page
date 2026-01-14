// @ts-nocheck
"use client";

import React from "react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
    return (
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
                <div className="framer-k8sp7u" data-framer-name="Background Image">
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
                        {testimonial.text}
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
                                width="48"
                                height="48"
                                sizes="48px"
                                src={testimonial.avatar}
                                alt={testimonial.name}
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
                    <div className="framer-3ykc4b" data-framer-name="Text Container">
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
                                {testimonial.name}
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
                                {testimonial.title}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
