<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 mt-4">
        <h1>Feedback &amp; Bugs</h1>
      </div>
      <div class="col-sm-6">
        <div class="bg-light rounded p-3">
          <form
            method="POST"
            action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdtenIJ27UyaIAPp2BU3Nx4phdqnkEebeA9qvtGuT92HDanRA/formResponse?embedded=true"
            target="_blank"
          >
            <div class="form-group">
              <label for="feedback">Feedback &amp; Bugs</label>
              <textarea
                name="entry.1993122946"
                class="form-control"
                id="feedback"
                rows="3"
                required
                aria-describedby="feedbackHelp"
              ></textarea>
              <small id="feedbackHelp" class="form-text text-muted"
                >Required</small
              >
            </div>
            <div class="form-group">
              <label for="">Email address</label>
              <input
                type="email"
                class="form-control"
                id=""
                name="entry.335184171"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" class="form-text text-muted"
                >Optional, but let me know how to reach you if you want a
                response.</small
              >
            </div>
            <button type="submit" class="btn btn-dark">Submit</button>
          </form>
        </div>
      </div>
      <div class="col-sm-6 align-self-center">
        <p class="lead">
          Your feedback is greatly appreciated. Let me know what you think about
          this app, what you like, and what features or improvements you would
          like to see.
        </p>
        <p class="lead">
          Keep in mind that improvements may not be implemented due to time,
          cost, and data formatting collisions. Above all, remember that this
          app is free.
        </p>
        <p class="lead">Thanks,</p>
        <p>—Nathan Blaylock</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feedback',
  head() {
    return {
      title: 'Feedback | ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Your feedback is greatly appreciated. Let me know what you think about this app, what you like, and what features or improvements you would like to see.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
