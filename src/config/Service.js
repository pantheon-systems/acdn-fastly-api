/* eslint-disable camelcase */
class Service {
  /**
   * Service Methods
   */
  readServices() {
    return this.request({
      method: 'GET',
      url: `/service`,
    });
  }

  readServiceDetails(service_id) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/details`,
    });
  }

  readService(service_id) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}`,
    });
  }

  createService(data) {
    return this.request({
      method: 'POST',
      url: `/service`,
      data,
    });
  }

  updateService(service_id, data) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}`,
      data,
    });
  }

  deleteService(service_id) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}`,
    });
  }
}

module.exports = Service;