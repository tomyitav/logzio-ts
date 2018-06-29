export class LogzioTs {

  constructor(private token: string) {
  }

  public async log(data: any) {
    try {
      let logUrl = 'http://listener.logz.io:8090'+ '?token=' + this.token;
      const res = await this.fetchFromServer(logUrl, data);
      if(!res.ok) {
        if (window && window.console && typeof window.console.warn === 'function') {
          console.warn('Got bad status in response: ', res);
        }
      }

    } catch (ex) {
      if (window && window.console && typeof window.console.error === 'function') {
        console.error("Failed to send log because of exception:\n" + ex);
      }
    }
  };

  private async fetchFromServer(url: string, data: any): Promise<Response> {
    return fetch(url, {
      body: JSON.stringify(data), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'user-agent': 'logzio-ts logger',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // *client, no-referrer
    });
  }
}
