import pdf from 'html-pdf';
import pdfSample from '../pdf-sample/index.js';

// Controller function for creating PDF
export const createPdf = async (req, res) => {
    try {
        // Generate PDF content using pdfSample function (assuming pdfSample is defined elsewhere)
        const pdfContent = pdfSample(req.body);
        console.log(pdfContent)
        // Create PDF file
        pdf.create(pdfContent, {}).toFile("Resume.pdf", (err, result) => {
            if (err) {
                console.error("Error creating PDF:", err);
                res.status(500).send("Internal server error");
            } else {
                console.log("PDF created successfully");
                res.send("PDF created successfully");
            }
        });
    } catch (error) {
        console.error("Error creating PDF:", error);
        res.status(500).send("Internal server error");
    }
};

// Controller function for fetching PDF
export const fetchPdf = (req, res) => {
    try {
        // Send PDF file
        res.sendFile(`${__dirname}/Resume.pdf`);
    } catch (error) {
        console.error("Error fetching PDF:", error);
        res.status(500).send("Internal server error");
    }
};
