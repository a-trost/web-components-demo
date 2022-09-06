module.exports = {
  tags: ["posts"],
  eleventyComputed: {
    viewCount: (data) => {
      const item = data.analytics.data.find(
        (item) => item.resource == `${data.page.filePathStem}/`
      );
      return item ? item.count : 0;
    },
  },
};
