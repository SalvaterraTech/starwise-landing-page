import { useTranslations } from 'next-intl';

const TestimonialHeader = () => {
    const t = useTranslations('Testimonials');
    return (
        <div className="framer-1ewmzx7" data-framer-name="Text Container">
            <div
                className="framer-1c5axn3"
                data-framer-name="Heading"
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
                <h2
                    className="framer-text framer-styles-preset-6snecm"
                    data-styles-preset="rVRByc2xi"
                >
                    {t('headerTitle')}
                </h2>
            </div>
            <div className="framer-dlymwt" data-framer-name="Paragraph Container">
                <div
                    className="framer-xl0q2a"
                    data-framer-name="Paragraph"
                    style={{
                        outline: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        flexShrink: "0",
                        "--extracted-r6o4lv":
                            "var(--token-1fe402aa-6f19-4409-814b-53c8bdf92f81, rgb(121, 123, 133))",
                        "--framer-paragraph-spacing": "0px",
                        transform: "none",
                    }}
                    data-framer-component-type="RichTextContainer"
                >
                    <p
                        className="framer-text framer-styles-preset-11bw1qu"
                        data-styles-preset="JkMvGTmRK"
                        style={{
                            "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-1fe402aa-6f19-4409-814b-53c8bdf92f81, rgb(121, 123, 133)))",
                        }}
                    >
                        {t('headerSubtitle')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialHeader;
