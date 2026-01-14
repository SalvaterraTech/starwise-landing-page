import { useTranslations } from 'next-intl';

const TestimonialBadge = () => {
    const t = useTranslations('Testimonials');
    return (
        <div
            className="framer-6jqrb1"
            data-border="true"
            data-framer-name="Container"
            style={{
                "--border-bottom-width": "1px",
                "--border-color":
                    "var(--token-52be73dd-1bd3-4201-83f2-487c9f21864d, rgb(29, 29, 32))",
                "--border-left-width": "1px",
                "--border-right-width": "1px",
                "--border-style": "solid",
                "--border-top-width": "1px",
                backgroundColor:
                    "var(--token-89ca0e81-7337-4782-b669-5fecde3b876a, rgb(19, 19, 21))",
                borderBottomLeftRadius: "100px",
                borderBottomRightRadius: "100px",
                borderTopLeftRadius: "100px",
                borderTopRightRadius: "100px",
            }}
        >
            <div className="framer-qquypx" data-framer-name="Icon">
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
                        width="20"
                        height="20"
                        sizes="20px"
                        src="/assets/testimonials/badge-check.svg"
                        alt="Icon"
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
                className="framer-edc4o"
                data-framer-name="Text"
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
                    className="framer-text framer-styles-preset-brsdai"
                    data-styles-preset="o9ZJ7wliQ"
                >
                    {t('badge')}
                </p>
            </div>
        </div>
    );
};

export default TestimonialBadge;
