const BaseRepository = require('./base-repository')
const Product = require('../models/database/product')
const DataBaseException = require('../models/exceptions/database-exception')

const ProductsTable = 'RESERVATION_PRODUCTS'
const ProductsIdColumn = 'ID'
const ProductsIdClientColumn = 'ID_CLIENT'
const ProductsTitleColumn = 'TITLE'
const ProductsActiveColumn = 'ACTIVE'
const ProductsDescriptionColumn = 'DESCRIPTION'
const ProductsReferenceColumn = 'REFERENCE'

class ProductsRepository extends BaseRepository {
  /**
    * @method getProduct
    * @param {object} args
    * @param {string} args.id
    */
  async getProduct ({ id }) {
    try {
      const query = this.queryBuilder
        .first([
                `${ProductsIdColumn} as id`,
                `${ProductsIdClientColumn} as clientId`,
                `${ProductsTitleColumn} as title`,
                `${ProductsActiveColumn} as active`,
                `${ProductsDescriptionColumn} as description`,
                `${ProductsReferenceColumn} as reference`
        ])
        .from(ProductsTable)
        .where(ProductsIdColumn, id)

      const result = await this.dbClient.execute(query)
      return new Product(result)
    } catch (err) {
      this.logger.error(err)
      throw new DataBaseException('getProduct')
    }
  }

  /**
    * @method insertProduct
    * @param {object} args
    * @param {string} args.name
    * @param {number} args.clientId
    * @param {boolean} args.active
    * @param {string} args.description
    * @param {string} args.reference
    * @returns {number}
    */
  async insertProduct ({ clientId, title, active, description, reference } = {}) {
    try {
      const query = this.queryBuilder
        .insert({
          [`${ProductsIdClientColumn}`]: clientId,
          [`${ProductsTitleColumn}`]: title,
          [`${ProductsActiveColumn}`]: active,
          [`${ProductsDescriptionColumn}`]: description,
          [`${ProductsReferenceColumn}`]: reference
        })
        .into(ProductsTable)
        .returning(ProductsIdColumn)

      const result = await this.dbClient.execute(query)
      return result[0]
    } catch (err) {
      this.logger.error(err)
      throw new DataBaseException('insertProduct')
    }
  }
}

module.exports = ProductsRepository
