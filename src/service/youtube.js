class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet, statistics',
        chart: 'mostPopular',
        maxResults: 24,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 24,
        type: 'video',
        q: query,
      },
    });
    return response.data.items.map((item) => ({...item, id: item.id.videoId}));
  }

  async fetchVideoData(videoId) {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet, statistics',
        id: videoId,
        fields:
          'items(id,snippet(publishedAt,title,description,thumbnails.medium.url,thumbnails.medium.url,tags),statistics(viewCount,likeCount,favoriteCount,commentCount))',
      },
    });
    return response.data.items[0];
  }
}

export default Youtube;
