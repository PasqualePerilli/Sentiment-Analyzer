# Sentiment Analyzer

This application uses NodeJS and React, in conjunction with IBM's Watson Natural Language Understanding service to analyze the sentiment and emotions of text.

The application has a front-end (written in React) that allows the user to choose whether to analyze a text or a website. Once the choice is made, then the user can click a button to either analyze the sentiment (which can be positive, negative or neutral) or the emotion (which will give the user a breakdown of how much of each of the main emotion is detected on the text).

In order for these features to be available, the back-end was configured with four endpoints:
 - `/text/sentiment` for analyzing the sentiment of a text;
 - `/url/sentiment` for analyzing the sentiment of a website;
 - `/text/emotion` for analyzing the emotion of a text;
 - `/url/emotion` for analyzing the emotion of a website;

## Testing

The following screenshots show the application in use. You can download the video of me showcasing the application [here](https://github.com/PasqualePerilli/Sentiment-Analyzer/raw/master/GitHub-Screenshots/showcase.webm) (you can use [VLC media player](https://www.videolan.org) to open the downloaded file), or keep reading below to see the screenshots.

### Text sentiment analysis: Positive

If we were to write in the input box a text such as `This is a very happy statement`, we would expect the sentiment to be positive. Screenshot is available below.
The result is written in green to further reinforce the message.

![Positive text sentiment analysis](/GitHub-Screenshots/text-happy.jpg)

### Text sentiment analysis: Negative

If we were to write in the input box a text such as `This is a very unhappy statement`, we would expect the sentiment to be negative. Screenshot is available below.
The result is written in red to further reinforce the message.

![Negative text sentiment analysis](/GitHub-Screenshots/text-unhappy.jpg)

### Text sentiment analysis: Neutral

If we were to write in the input box a text such as `This is a very neutral statement`, we would expect the sentiment to be neutral. Screenshot is available below.
The result is written in yellow to further reinforce the message.

![Neutral text sentiment analysis](/GitHub-Screenshots/text-neutral.jpg)

### Text sentiment analysis: Invalid

If we were to write in the input box a text such as `this`, we would expect the analysis to fail and an error message to be displayed. Screenshot is available below.

![Invalid Text sentiment analysis](/GitHub-Screenshots/invalid-text-sentiment.jpg)

### Text emotion analysis: Positive

If we were to write in the input box a text such as `This is a very happy statement`, we would expect the joy emotion to be high. Screenshot is available below.

![Positive text emotion analysis](/GitHub-Screenshots/text-happy-table.jpg)

### Text emotion analysis: Negative

If we were to write in the input box a text such as `This is a very unhappy statement`, we would expect the joy emotion to be low. Screenshot is available below.

![Negative text emotion analysis](/GitHub-Screenshots/text-unhappy-table.jpg)

### Text emotion analysis: Neutral

If we were to write in the input box a text such as `This is a very unhappy statement`, we would expect both the joy and sadness emotions to be middling. Screenshot is available below.

![Neutral text emotion analysis](/GitHub-Screenshots/text-neutral-table.jpg)

### Text emotion analysis: Invalid

If we were to write in the input box a text such as `that`, we would expect the analysis to fail and an error message to be displayed. Screenshot is available below.

![Invalid Text emotion analysis](/GitHub-Screenshots/invalid-text-emotion.jpg)

### URL sentiment analysis: Positive

If we were to write in the input box a text such as `www.coursera.org`, we would expect the sentiment to be positive, as learning is usually considered to be a positive thing. Screenshot is available below.
The result is written in green to further reinforce the message.

![Positive URL sentiment analysis](/GitHub-Screenshots/url-happy.jpg)

### URL sentiment analysis: Negative

If we were to write in the input box a text such as `https://www.statnews.com/2017/10/06/cancer-stories-patients/`, we would expect the sentiment to be negative, as the webpage describes the horrors of cancer patients. Screenshot is available below.
The result is written in red to further reinforce the message.

![Negative URL sentiment analysis](/GitHub-Screenshots/url-unhappy.jpg)

### URL sentiment analysis: Neutral

If we were to write in the input box a text such as `https://www.biography.com/political-figure/julius-caesar`, we would expect the sentiment to be neutral, as the page references a small biography of an historical figure such as Julius Caesar. Screenshot is available below.
The result is written in yellow to further reinforce the message.

![Negative URL sentiment analysis](/GitHub-Screenshots/url-neutral.jpg)

### URL sentiment analysis: Invalid

If we were to write in the input box a text such as `invalid URL`, we would expect the analysis to fail and an error message to be displayed. Screenshot is available below.

![Invalid URL sentiment analysis](/GitHub-Screenshots/invalid-url-sentiment.jpg)

### URL emotion analysis: Positive

If we were to write in the input box a text such as `www.coursera.org`, we would expect the joy emotion to be high. Screenshot is available below.

![Positive URL emotion analysis](/GitHub-Screenshots/url-happy-table.jpg)

### URL emotion analysis: Negative

If we were to write in the input box a text such as `https://www.statnews.com/2017/10/06/cancer-stories-patients/`, we would expect the joy emotion to be low. Screenshot is available below.

![Negative URL emotion analysis](/GitHub-Screenshots/url-unhappy-table.jpg)

### URL emotion analysis: Neutral

If we were to write in the input box a text such as `https://www.biography.com/political-figure/julius-caesar`, we would expect both the joy and sadness emotions to be middling. Screenshot is available below.

![Neutral URL emotion analysis](/GitHub-Screenshots/url-neutral-table.jpg)

### URL emotion analysis: Invalid

If we were to write in the input box a text such as `this is not a real URL`, we would expect the analysis to fail and an error message to be displayed. Screenshot is available below.

![Invalid URL emotion analysis](/GitHub-Screenshots/invalid-url-emotion.jpg)

