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

  channel(videos, promises) {
    for (let i = 0; i < videos.length; i++) {
      const response = this.youtube
        .get('channels', {
          params: {
            part: 'snippet, statistics',
            id: videos[i].snippet.channelId,
          },
        })
        .then((result) => result.data.items[0])
        .then((item) => (videos[i].channel = item));
      promises.push(response);
    }
    return promises;
  }

  countData(search, newArr) {
    for (let i = 0; i < search.length; i++) {
      const response = this.youtube
        .get('videos', {
          params: {
            part: 'statistics',
            id: search[i].id,
          },
        })
        .then((result) => result.data.items[0])
        .then((item) => (search[i].countData = item));
      newArr.push(response);
    }
    return newArr;
  }
}

export default Youtube;
