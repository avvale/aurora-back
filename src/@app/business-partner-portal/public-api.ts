import { BusinessPartnerPortalBusinessPartnerHandlers, BusinessPartnerPortalBusinessPartnerServices, BusinessPartnerPortalBusinessPartnerModel, BusinessPartnerPortalIBusinessPartnerRepository, BusinessPartnerPortalSequelizeBusinessPartnerRepository, BusinessPartnerPortalBusinessPartnerSagas } from './business-partner';
import { BusinessPartnerPortalPartnerAddressHandlers, BusinessPartnerPortalPartnerAddressServices, BusinessPartnerPortalPartnerAddressModel, BusinessPartnerPortalIPartnerAddressRepository, BusinessPartnerPortalSequelizePartnerAddressRepository, BusinessPartnerPortalPartnerAddressSagas } from './partner-address';
import { BusinessPartnerPortalPartnerContactHandlers, BusinessPartnerPortalPartnerContactServices, BusinessPartnerPortalPartnerContactModel, BusinessPartnerPortalIPartnerContactRepository, BusinessPartnerPortalSequelizePartnerContactRepository, BusinessPartnerPortalPartnerContactSagas } from './partner-contact';
import { BusinessPartnerPortalPaymentCollectionModeHandlers, BusinessPartnerPortalPaymentCollectionModeServices, BusinessPartnerPortalPaymentCollectionModeModel, BusinessPartnerPortalIPaymentCollectionModeRepository, BusinessPartnerPortalSequelizePaymentCollectionModeRepository, BusinessPartnerPortalPaymentCollectionModeSagas } from './payment-collection-mode';
import { BusinessPartnerPortalPaymentModeHandlers, BusinessPartnerPortalPaymentModeServices, BusinessPartnerPortalPaymentModeModel, BusinessPartnerPortalIPaymentModeRepository, BusinessPartnerPortalSequelizePaymentModeRepository, BusinessPartnerPortalPaymentModeSagas } from './payment-mode';
import { BusinessPartnerPortalPurchaseInvoiceHeaderHandlers, BusinessPartnerPortalPurchaseInvoiceHeaderServices, BusinessPartnerPortalPurchaseInvoiceHeaderModel, BusinessPartnerPortalIPurchaseInvoiceHeaderRepository, BusinessPartnerPortalSequelizePurchaseInvoiceHeaderRepository, BusinessPartnerPortalPurchaseInvoiceHeaderSagas } from './purchase-invoice-header';
import { BusinessPartnerPortalPurchaseInvoicePositionHandlers, BusinessPartnerPortalPurchaseInvoicePositionServices, BusinessPartnerPortalPurchaseInvoicePositionModel, BusinessPartnerPortalIPurchaseInvoicePositionRepository, BusinessPartnerPortalSequelizePurchaseInvoicePositionRepository, BusinessPartnerPortalPurchaseInvoicePositionSagas } from './purchase-invoice-position';
import { BusinessPartnerPortalSalesInvoiceHeaderHandlers, BusinessPartnerPortalSalesInvoiceHeaderServices, BusinessPartnerPortalSalesInvoiceHeaderModel, BusinessPartnerPortalISalesInvoiceHeaderRepository, BusinessPartnerPortalSequelizeSalesInvoiceHeaderRepository, BusinessPartnerPortalSalesInvoiceHeaderSagas } from './sales-invoice-header';
import { BusinessPartnerPortalSalesInvoicePositionHandlers, BusinessPartnerPortalSalesInvoicePositionServices, BusinessPartnerPortalSalesInvoicePositionModel, BusinessPartnerPortalISalesInvoicePositionRepository, BusinessPartnerPortalSequelizeSalesInvoicePositionRepository, BusinessPartnerPortalSalesInvoicePositionSagas } from './sales-invoice-position';
import { BusinessPartnerPortalSupplierDocumentHandlers, BusinessPartnerPortalSupplierDocumentServices, BusinessPartnerPortalSupplierDocumentModel, BusinessPartnerPortalISupplierDocumentRepository, BusinessPartnerPortalSequelizeSupplierDocumentRepository, BusinessPartnerPortalSupplierDocumentSagas } from './supplier-document';

/**
 * @aurora-generated
 * @source cliter/business-partner-portal
 */
export const BusinessPartnerPortalHandlers = [
    ...BusinessPartnerPortalBusinessPartnerHandlers,
    ...BusinessPartnerPortalPartnerAddressHandlers,
    ...BusinessPartnerPortalPartnerContactHandlers,
    ...BusinessPartnerPortalPaymentCollectionModeHandlers,
    ...BusinessPartnerPortalPaymentModeHandlers,
    ...BusinessPartnerPortalPurchaseInvoiceHeaderHandlers,
    ...BusinessPartnerPortalPurchaseInvoicePositionHandlers,
    ...BusinessPartnerPortalSalesInvoiceHeaderHandlers,
    ...BusinessPartnerPortalSalesInvoicePositionHandlers,
    ...BusinessPartnerPortalSupplierDocumentHandlers
];
export const BusinessPartnerPortalServices = [
    ...BusinessPartnerPortalBusinessPartnerServices,
    ...BusinessPartnerPortalPartnerAddressServices,
    ...BusinessPartnerPortalPartnerContactServices,
    ...BusinessPartnerPortalPaymentCollectionModeServices,
    ...BusinessPartnerPortalPaymentModeServices,
    ...BusinessPartnerPortalPurchaseInvoiceHeaderServices,
    ...BusinessPartnerPortalPurchaseInvoicePositionServices,
    ...BusinessPartnerPortalSalesInvoiceHeaderServices,
    ...BusinessPartnerPortalSalesInvoicePositionServices,
    ...BusinessPartnerPortalSupplierDocumentServices
];
export const BusinessPartnerPortalModels = [
    BusinessPartnerPortalBusinessPartnerModel,
    BusinessPartnerPortalPartnerAddressModel,
    BusinessPartnerPortalPartnerContactModel,
    BusinessPartnerPortalPaymentCollectionModeModel,
    BusinessPartnerPortalPaymentModeModel,
    BusinessPartnerPortalPurchaseInvoiceHeaderModel,
    BusinessPartnerPortalPurchaseInvoicePositionModel,
    BusinessPartnerPortalSalesInvoiceHeaderModel,
    BusinessPartnerPortalSalesInvoicePositionModel,
    BusinessPartnerPortalSupplierDocumentModel
];
export const BusinessPartnerPortalRepositories = [
    {
        provide : BusinessPartnerPortalIBusinessPartnerRepository,
        useClass: BusinessPartnerPortalSequelizeBusinessPartnerRepository,
    },
    {
        provide : BusinessPartnerPortalIPartnerAddressRepository,
        useClass: BusinessPartnerPortalSequelizePartnerAddressRepository,
    },
    {
        provide : BusinessPartnerPortalIPartnerContactRepository,
        useClass: BusinessPartnerPortalSequelizePartnerContactRepository,
    },
    {
        provide : BusinessPartnerPortalIPaymentCollectionModeRepository,
        useClass: BusinessPartnerPortalSequelizePaymentCollectionModeRepository,
    },
    {
        provide : BusinessPartnerPortalIPaymentModeRepository,
        useClass: BusinessPartnerPortalSequelizePaymentModeRepository,
    },
    {
        provide : BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
        useClass: BusinessPartnerPortalSequelizePurchaseInvoiceHeaderRepository,
    },
    {
        provide : BusinessPartnerPortalIPurchaseInvoicePositionRepository,
        useClass: BusinessPartnerPortalSequelizePurchaseInvoicePositionRepository,
    },
    {
        provide : BusinessPartnerPortalISalesInvoiceHeaderRepository,
        useClass: BusinessPartnerPortalSequelizeSalesInvoiceHeaderRepository,
    },
    {
        provide : BusinessPartnerPortalISalesInvoicePositionRepository,
        useClass: BusinessPartnerPortalSequelizeSalesInvoicePositionRepository,
    },
    {
        provide : BusinessPartnerPortalISupplierDocumentRepository,
        useClass: BusinessPartnerPortalSequelizeSupplierDocumentRepository,
    }
];
export const BusinessPartnerPortalSagas = [
    BusinessPartnerPortalBusinessPartnerSagas,
    BusinessPartnerPortalPartnerAddressSagas,
    BusinessPartnerPortalPartnerContactSagas,
    BusinessPartnerPortalPaymentCollectionModeSagas,
    BusinessPartnerPortalPaymentModeSagas,
    BusinessPartnerPortalPurchaseInvoiceHeaderSagas,
    BusinessPartnerPortalPurchaseInvoicePositionSagas,
    BusinessPartnerPortalSalesInvoiceHeaderSagas,
    BusinessPartnerPortalSalesInvoicePositionSagas,
    BusinessPartnerPortalSupplierDocumentSagas
];
