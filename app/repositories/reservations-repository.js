const BaseRepository = require('./base-repository')
const Reservation = require('../models/database/reservation')
const DataBaseException = require('../models/exceptions/database-exception')
require('../utils/extensions')

const ReservationsTable = 'RESERVATIONS'
const ReservationsIdColumn = 'ID'
const ReservationsProductColumn = 'ID_RESERVATION_PRODUCT'
const ReservationsOwnerColumn = 'OWNER'
const ReservationsStatusColumn = 'ID_RESERVATION_STATUS'
const ReservationsRegisterDateColumn = 'REGISTER_DATE'
const ReservationsFinishDateColumn = 'FINISH_DATE'

const ProductsTable = 'RESERVATION_PRODUCTS'
const ProductsIdColumn = 'ID'
const ProductsTitleColumn = 'TITLE'
const ProductsDescriptionColumn = 'DESCRIPTION'
const ProductsReferenceColumn = 'REFERENCE'

const StatusTable = 'RESERVATION_PRODUCTS'
const StatusIdColumn = 'ID'
const StatusNameColumn = 'NAME'

class ReservationsRepository extends BaseRepository {
  /**
    * @method getReservation
    * @param {object} args
    * @param {string} args.id
    */
  async getReservation ({ id }) {
    try {
      const query = this.queryBuilder
        .first([
          `${ReservationsIdColumn.tableAlias('RES')} as id`,
          `${ReservationsProductColumn.tableAlias('RES')} as productId`,
          `${ProductsTitleColumn.tableAlias('PRO')} as productTitle`,
          `${ProductsDescriptionColumn.tableAlias('PRO')} as productDescription`,
          `${ProductsReferenceColumn.tableAlias('PRO')} as productReference`,
          `${ReservationsOwnerColumn.tableAlias('RES')} as owner`,
          `${StatusNameColumn.tableAlias('STS')} as status`,
          `${ReservationsRegisterDateColumn.tableAlias('RES')} as registerDate`,
          `${ReservationsFinishDateColumn.tableAlias('RES')} as finishDate`
        ])
        .from(ReservationsTable.tableAlias('RES'))
        .innerJoin(
          ProductsTable.tableAlias('PROD'),
          ProductsIdColumn.tableAlias('PROD'),
          ReservationsProductColumn.tableAlias('RES')
        )
        .innerJoin(
          StatusTable.tableAlias('STS'),
          StatusIdColumn.tableAlias('STS'),
          ReservationsStatusColumn.tableAlias('RES')
        )
        .where(ReservationsIdColumn.tableAlias('RES'), id)

      const result = await this.dbClient.execute(query)
      return new Reservation(result)
    } catch (err) {
      this.logger.error(err)
      throw new DataBaseException('getReservation')
    }
  }

  /**
    * @method insertReservation
    * @param {object} args
    * @param {string} args.productId
    * @param {boolean} args.owner
    * @param {number} args.statusId
    * @param {string} args.finishDate
    * @returns {number}
    */
  async insertReservation ({ productId, owner, statusId, finishDate } = {}) {
    try {
      const query = this.queryBuilder
        .insert({
          [`${ReservationsIdClientColumn}`]: id,
          [`${ReservationsProductColumn}`]: productId,
          [`${ReservationsOwnerColumn}`]: owner,
          [`${ReservationsStatusColumn}`]: statusId,
          [`${ReservationsFinishDateColumn}`]: finishDate
        })
        .into(ReservationsTable)
        .returning(ReservationsIdColumn)

      const result = await this.dbClient.execute(query)
      return result[0]
    } catch (err) {
      this.logger.error(err)
      throw new DataBaseException('insertReservation')
    }
  }
}

module.exports = ReservationsRepository


