/**
 * @aurora-generated
 * @source cliter/business-partner-portal
 */
import { SharedModule } from '@aurora/shared.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BusinessPartnerPortalSeeder } from './business-partner-portal.seeder';
import { BusinessPartnerPortalModels, BusinessPartnerPortalHandlers, BusinessPartnerPortalServices, BusinessPartnerPortalRepositories, BusinessPartnerPortalSagas } from '@app/business-partner-portal';
import { BusinessPartnerPortalBusinessPartnerApiControllers, BusinessPartnerPortalBusinessPartnerApiResolvers, BusinessPartnerPortalBusinessPartnerApiHandlers, BusinessPartnerPortalBusinessPartnerApiServices } from './business-partner';
import { BusinessPartnerPortalPartnerAddressApiControllers, BusinessPartnerPortalPartnerAddressApiResolvers, BusinessPartnerPortalPartnerAddressApiHandlers, BusinessPartnerPortalPartnerAddressApiServices } from './partner-address';
import { BusinessPartnerPortalPartnerContactApiControllers, BusinessPartnerPortalPartnerContactApiResolvers, BusinessPartnerPortalPartnerContactApiHandlers, BusinessPartnerPortalPartnerContactApiServices } from './partner-contact';
import { BusinessPartnerPortalPaymentCollectionModeApiControllers, BusinessPartnerPortalPaymentCollectionModeApiResolvers, BusinessPartnerPortalPaymentCollectionModeApiHandlers, BusinessPartnerPortalPaymentCollectionModeApiServices } from './payment-collection-mode';
import { BusinessPartnerPortalPaymentModeApiControllers, BusinessPartnerPortalPaymentModeApiResolvers, BusinessPartnerPortalPaymentModeApiHandlers, BusinessPartnerPortalPaymentModeApiServices } from './payment-mode';
import { BusinessPartnerPortalPurchaseInvoiceHeaderApiControllers, BusinessPartnerPortalPurchaseInvoiceHeaderApiResolvers, BusinessPartnerPortalPurchaseInvoiceHeaderApiHandlers, BusinessPartnerPortalPurchaseInvoiceHeaderApiServices } from './purchase-invoice-header';
import { BusinessPartnerPortalPurchaseInvoicePositionApiControllers, BusinessPartnerPortalPurchaseInvoicePositionApiResolvers, BusinessPartnerPortalPurchaseInvoicePositionApiHandlers, BusinessPartnerPortalPurchaseInvoicePositionApiServices } from './purchase-invoice-position';
import { BusinessPartnerPortalSalesInvoiceHeaderApiControllers, BusinessPartnerPortalSalesInvoiceHeaderApiResolvers, BusinessPartnerPortalSalesInvoiceHeaderApiHandlers, BusinessPartnerPortalSalesInvoiceHeaderApiServices } from './sales-invoice-header';
import { BusinessPartnerPortalSalesInvoicePositionApiControllers, BusinessPartnerPortalSalesInvoicePositionApiResolvers, BusinessPartnerPortalSalesInvoicePositionApiHandlers, BusinessPartnerPortalSalesInvoicePositionApiServices } from './sales-invoice-position';
import { BusinessPartnerPortalSupplierDocumentApiControllers, BusinessPartnerPortalSupplierDocumentApiResolvers, BusinessPartnerPortalSupplierDocumentApiHandlers, BusinessPartnerPortalSupplierDocumentApiServices } from './supplier-document';

@Module({
  imports: [SharedModule, SequelizeModule.forFeature([
          ...BusinessPartnerPortalModels
    ])],
  controllers: [
      ...BusinessPartnerPortalBusinessPartnerApiControllers,
      ...BusinessPartnerPortalPartnerAddressApiControllers,
      ...BusinessPartnerPortalPartnerContactApiControllers,
      ...BusinessPartnerPortalPaymentCollectionModeApiControllers,
      ...BusinessPartnerPortalPaymentModeApiControllers,
      ...BusinessPartnerPortalPurchaseInvoiceHeaderApiControllers,
      ...BusinessPartnerPortalPurchaseInvoicePositionApiControllers,
      ...BusinessPartnerPortalSalesInvoiceHeaderApiControllers,
      ...BusinessPartnerPortalSalesInvoicePositionApiControllers,
      ...BusinessPartnerPortalSupplierDocumentApiControllers
],
  providers: [BusinessPartnerPortalSeeder,
      ...BusinessPartnerPortalHandlers,
      ...BusinessPartnerPortalServices,
      ...BusinessPartnerPortalRepositories,
      ...BusinessPartnerPortalSagas,
      ...BusinessPartnerPortalBusinessPartnerApiResolvers,
      ...BusinessPartnerPortalBusinessPartnerApiHandlers,
      ...BusinessPartnerPortalBusinessPartnerApiServices,
      ...BusinessPartnerPortalPartnerAddressApiResolvers,
      ...BusinessPartnerPortalPartnerAddressApiHandlers,
      ...BusinessPartnerPortalPartnerAddressApiServices,
      ...BusinessPartnerPortalPartnerContactApiResolvers,
      ...BusinessPartnerPortalPartnerContactApiHandlers,
      ...BusinessPartnerPortalPartnerContactApiServices,
      ...BusinessPartnerPortalPaymentCollectionModeApiResolvers,
      ...BusinessPartnerPortalPaymentCollectionModeApiHandlers,
      ...BusinessPartnerPortalPaymentCollectionModeApiServices,
      ...BusinessPartnerPortalPaymentModeApiResolvers,
      ...BusinessPartnerPortalPaymentModeApiHandlers,
      ...BusinessPartnerPortalPaymentModeApiServices,
      ...BusinessPartnerPortalPurchaseInvoiceHeaderApiResolvers,
      ...BusinessPartnerPortalPurchaseInvoiceHeaderApiHandlers,
      ...BusinessPartnerPortalPurchaseInvoiceHeaderApiServices,
      ...BusinessPartnerPortalPurchaseInvoicePositionApiResolvers,
      ...BusinessPartnerPortalPurchaseInvoicePositionApiHandlers,
      ...BusinessPartnerPortalPurchaseInvoicePositionApiServices,
      ...BusinessPartnerPortalSalesInvoiceHeaderApiResolvers,
      ...BusinessPartnerPortalSalesInvoiceHeaderApiHandlers,
      ...BusinessPartnerPortalSalesInvoiceHeaderApiServices,
      ...BusinessPartnerPortalSalesInvoicePositionApiResolvers,
      ...BusinessPartnerPortalSalesInvoicePositionApiHandlers,
      ...BusinessPartnerPortalSalesInvoicePositionApiServices,
      ...BusinessPartnerPortalSupplierDocumentApiResolvers,
      ...BusinessPartnerPortalSupplierDocumentApiHandlers,
      ...BusinessPartnerPortalSupplierDocumentApiServices
],
})
export class BusinessPartnerPortalModule {}
