const MissingParamError = require('../../utils/errors/missing-param-error');

module.exports = class LoadUserByEmailRepository {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async load(email) {
    if (!email) {
      throw new MissingParamError('email');
    }

    const user = await this.userModel.findOne({ email });
    return user;
  }
};
