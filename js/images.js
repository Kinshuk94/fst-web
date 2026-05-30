// js/images.js
// ─────────────────────────────────────────────────────────────────
// To swap a photo: replace the file in images/ and update the path
// below. Nothing else needs to change anywhere in the codebase.
// ─────────────────────────────────────────────────────────────────
const IMAGES = {
  hero: "images/hero/main.webp",

  mosaic: [
    "images/mosaic/landscape.webp",  // slot 0 — large left panel
    "images/mosaic/room.webp",        // slot 1
    "images/mosaic/cafe.webp",        // slot 2
    "images/mosaic/garden.webp",      // slot 3
    "images/mosaic/view.webp",        // slot 4
  ],

  rooms: {
    dorm6:          "images/rooms/dorm-6bed.webp",
    dorm4:          "images/rooms/dorm-4bed.webp",
    privateBalcony: "images/rooms/private-balcony.webp",
    private:        "images/rooms/private.webp",
  },

  cafe: {
    food:     "images/cafe/food.webp",
    interior: "images/cafe/interior.webp",
  },

  explore: {
    naggarCastle:    "images/explore/naggar-castle.jpg",
    chandraKhani:    "images/explore/chandrakhani.jpg",
    solangValley:    "images/explore/solang-valley.jpg",
    roerichGallery:  "images/explore/roerich-gallery.jpg",
  },
};
