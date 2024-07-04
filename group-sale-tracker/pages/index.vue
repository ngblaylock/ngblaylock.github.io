<template>
  <div>
    <div class="jumbotron bg-dark text-white rounded-0 px-0 mb-0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-5 order-md-last">
            <img
              src="~/assets/computer-designed.png"
              class="img-fluid"
              alt="Computer Screen"
            />
          </div>
          <div class="col-lg-6 col-md-7">
            <h1>Group Sale Tracker</h1>
            <p class="h4">
              Track sales easily with Group Sale Tracker, a free and easy to use
              web application.
            </p>
            <hr style="border-color: white;" />
            <p>
              Use categories to separate out sales and let the app do all the
              tricky calculations for you. Whether you are doing a combined yard
              sale, bake sale, concession stand or anything else, Group Sale
              Tracker can improve your sales tracking.
            </p>
            <p style="line-height: 3em;">
              <nuxt-link class="btn btn-light" to="/new-sale"
                >Start a New Group Sale</nuxt-link
              >
              <nuxt-link v-if="saleName" class="btn btn-outline-light" to="/app"
                >Continue {{ saleName }}</nuxt-link
              >
              <button
                v-else
                v-b-modal.modal-upload-data
                class="btn btn-outline-light"
              >
                Upload Data
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <a href="https://youtu.be/8ZreBYWXQVw" target="_blank" class="btn btn-primary btn-block btn-lg rounded-0 mb-5"><i class="far fa-play-circle"></i> Watch the Group Sale Tracker demonstration</a>
    <div class="container">
      <div class="row pt-3">
        <div class="col-sm-12">
          <h2 class="h1 text-center">Features</h2>
        </div>
      </div>
      <div class="row align-items-center my-5">
        <div class="col-sm-4 offset-md-1 order-sm-2">
          <img
            src="~/assets/stickers.png"
            class="img-fluid"
            alt="Sticker Example"
          />
        </div>
        <div class="col-sm-8 col-md-6">
          <h2>Categorize Your Sales</h2>
          <p>
            Whether you need 1 category, or 100, add as many categories as you
            need for your sale. Common uses for this could be to categorize by
            family names, individuals, item type, or anything else you can think
            of. Cagegories allow you to customize a name and color for any of
            your needs. Group Sale Tracker totals each category for you, and
            lets you how many items were sold.
          </p>
          <p class="alert alert-secondary">
            <strong>Tip:</strong> Consider buying some colored stickers and
            writing the price on them for easy processing at the checkout.
          </p>
        </div>
      </div>
      <div class="row align-items-center my-5">
        <div class="col-sm-4 offset-md-1">
          <img src="~/assets/browser-storage.png" class="img-fluid" alt="" />
        </div>
        <div class="col-sm-8 col-md-6 offset-md-1">
          <h2>In Browser Data Storage</h2>
          <p>
            Group Sale Tracker saves all data to your browser, not on any server
            or cloud platform. This improves privacy by not needing any user
            sign in, integration with a database, and your sales data is never
            sent to anyone else for any reason. Data saved in your browser will
            persist even in the event of needing to restart your computer or by
            closing your browser. Simply open up the same browser on the same
            computer to pick up right where you left off.
          </p>
        </div>
      </div>
      <div class="row align-items-center my-5">
        <div class="col-sm-4 offset-md-1 order-sm-2">
          <img
            src="~/assets/json.png"
            class="img-fluid"
            alt="Download and Upload Example"
          />
        </div>
        <div class="col-sm-8 col-md-6">
          <h2>Download and Upload Data</h2>
          <p>
            Do you have a sale that you want to download data for your records?
            What about sharing data with others in your group? No problem. With
            Group Sale Tracker you can download your data to a JSON file, and
            upload it anytime to any modern browser to either check past sales,
            or simply continue right where you left off. You can also take
            advantage of our print-friendly pages to store the information in a
            physical location.
          </p>
        </div>
      </div>
    </div>
    <div class="bg-dark py-5 text-white free">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-7">
            <h2>Free Forever, For Everyone</h2>
            <p>
              That's right. Free, Free, Free. This app is
              designed, developed, and maintained by me,
              <a href="https://nathanblaylock.com" target="_blank"
                >Nathan Blaylock</a
              >. I developed this app for fun, hoping that it could help
              someone, somewhere. Because this app uses data stored on your
              machine instead of a database, it doesn't cost me a penny.
            </p>
            <p>
              I welcome any <nuxt-link to="/feedback">feedback</nuxt-link> from
              anyone who has a concern or a great idea. Updates may not be very
              frequent, however, I will be sure to prioritize any updates based
              on the feedback recieved.
            </p>
            <p>
              If you find this app helpful for your sale, please consider
              <a href="https://www.paypal.me/NathanBlaylock" target="_blank"
                >donating</a
              >
              a small amount to help support my efforts, and PLEASE let me know
              what you used this app for.
            </p>
          </div>
          <div class="col-lg-4 col-sm-5">
            <img
              src="https://nathanblaylock.com/images/optimized/profile/blaylock-nathan-1-square.png"
              class="rounded-circle img-fluid d-none d-sm-block mx-auto"
              alt="Nathan's Profile Picture"
              style="max-width: 300px;"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data: function() {
    return {
      saleName: ''
    }
  },
  mounted: function() {
    if (localStorage.saleName) {
      this.saleName = JSON.parse(localStorage.getItem('saleName'))
    }
  }
}
</script>

<style lang="scss" scoped>
.tool-logos {
  max-width: 5em;
  &.smaller {
    max-width: 4.2em;
    padding: 5px;
  }
}
.bg-dark.text-white.free a {
  color: var(--light);
  border-bottom: 2px dotted white;
  &:hover {
    text-decoration: none;
    border-bottom-style: solid;
  }
}
</style>
