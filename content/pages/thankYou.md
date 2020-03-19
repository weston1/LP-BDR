---
template: DefaultPage
slug: thank-you
title: Thank You.
featuredImage: https://ucarecdn.com/7ec2ff8c-5ef7-4dd8-b551-baa44d114cc3/
meta:
  description: Thanks for joining loilpoints!
  title: Thank you
---

<script>
      const form = document.querySelector('form');
      form.addEventListener('submit', async event => {
        event.preventDefault();

// enable local testing
const IS_PRODUCTION = !/127\.0\.0\.1/.test(window.location);
        const SUBMISSION_URL = IS_PRODUCTION
          ? '/'
          : 'http://127.0.0.1:9000/submission-created';

        // disable button to prevent multiple submissions
        form.querySelector('button').disabled = true;

        try {
          const response = await fetch(SUBMISSION_URL, {
            method: 'post',
            headers: {
              'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: new URLSearchParams(new FormData(form)).toString()
          });

          if (response.status === 200) {
            document.querySelector('.successMsg').hidden = false;
          } else {
            document.querySelector('.errorMsg').hidden = false;
          }
        } catch (e) {
          console.error(e);
        }
      });

</script>
