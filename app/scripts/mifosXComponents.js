define(['underscore', 'mifosX'], function() {
  var components = {
    models: [
      'LoggedInUser',
      'roleMap',
      'Langs',
      'paypalUser',
      'Encript'
    ],
    services: [
      'ResourceFactoryProvider',
      'HttpServiceProvider',
      'AuthenticationService',
      'SessionManager',
      'Paginator',
      'HTValidationServiceProvider',
      'PermissionService'
    ],
    controllers: [
      'main/MainController',
      'main/LoginFormController',
      'main/TaskController',
      'main/SearchController',
      'main/NavigationController',
      'main/ProfileController',
      'main/MessangerController',
      'crm/prospects/ProspectsController',
      'crm/prospects/ViewProspectsController',
      'crm/prospects/CreateProspectsController',
      'crm/prospects/CancelProspectsController',
      'crm/prospects/EditProspectsController',
      'crm/prospects/FollowProspectsController',
      'client/ClientController',
      'client/CreateOrderController',
      'client/OrderController',
      'client/OrderDisconnectController',
      'client/OrderRenewalController',
      'client/AdjustmentClientController',
      'client/PaymentsClientController',
      'client/ClientInvoiceController',
      'client/StatementController',
      'client/EditClientController',
      'client/ViewClientController',
      'client/CreateClientController',
      'client/ViewFinancialTranController',
      'client/ClientDocumentController',
      'client/ClientIdentifierController',
      'client/ClientOneTimeSaleController',
      'client/ClientSecondSaleController',
      'client/ViewClientOneTimeSaleController',
      'client/AllocateHardwareOneTimeSaleController',
      'client/UploadClientIdentifierDocumentController',
      'client/CreateClientControllerwizard',
      'client/CreateProvisioningController',
      'client/CreateActivationController',
      'client/EditProvisioningController',
      'client/IpchangeController',
      'client/EditProvisioningDetailsController',
      'user/UserController',
      'system/ViewProvisioningMappingController',
      'user/UserFormController',
      'user/UserSettingController',
      'user/UserListController',
      'user/ViewUserController',
      'organization/OfficesModuleController',
      'organization/RoleController',
      'organization/ViewRoleController',
      'organization/CreateRoleController',
      'organization/EditPermissionsController',
      'organization/MakerCheckerController',
      'organization/OfficesController',
      'organization/ViewOfficeController',
      'organization/CreateOfficeController',
      'organization/EditOfficeController',
      'organization/CurrencyConfigController',
      'organization/CreateUserController',
      'organization/EditUserController',
      'organization/ViewEmployeeController',
      'organization/EditEmployeeController',
      'organization/EmployeeController',
      'organization/CreateEmployeeController',
      'accounting/AccountModuleController',
      'organization/GroupsDetailsController',
      'organization/ViewGroupsDetailsController',
      'accounting/AccFreqPostingController',
      'accounting/AccCoaController',
      'accounting/AccCreateGLAccountContoller',
      'accounting/AccViewGLAccountContoller',
      'accounting/AccEditGLAccountController',
      'accounting/ViewTransactionController',
      'accounting/JournalEntryController',
      'accounting/SearchTransactionController',
      'accounting/AccountingClosureController',
      'accounting/ViewAccountingClosureController',
      'accounting/AccountingRuleController',
      'accounting/AccCreateRuleController',
      'accounting/AccEditRuleController',
      'accounting/ViewAccRuleController',
      'system/SystemModuleController',
      'system/CodeController',
      'system/MappingController',
      'system/EditCodeController',
      'system/ViewCodeController',
      'system/AddCodeController',
      'system/ViewDataTableController',
      'system/DataTableController',
      'system/ReportsController',
      'system/ViewReportController',
      'system/CreateReportController',
      'system/EditReportController',
      'system/CreateDataTableController',
      'system/EditDataTableController',
      'system/MakeDataTableEntryController',
      'system/DataTableEntryController',
      'system/SchedulerJobsController',
      'system/EditJobParameters',
      'system/ViewSchedulerJobController',
      'system/EditSchedulerJobController',
      'system/ViewSchedulerJobHistoryController',
      'organization/HolController',
      'organization/ViewHolController',
      'organization/AddHolController',
      'reports/ViewReportsController',
      'reports/RunReportsController',
      'private/SuperuserController',
      'configurations/GlobalConfigurationController',
      'configurations/CreateSmtpController',
      'system/AuditController',
      'system/ViewAuditController',
      'organization/PlanController',
      'organization/CreatePlanController',
      'organization/ViewPlanController',
      'organization/EditPlanController',
      'organization/PriceController',
      'organization/CreatePriceController',
      'organization/ViewPriceController',
      'organization/EditPriceController',
      'organization/MediaController',
      'organization/CreateMediaController',
      'organization/ViewMediaController',
      'organization/EditMediaController',
      'organization/ContractController',
      'organization/CreateContractController',
      'organization/ViewContractController',
      'organization/EditContractController',
      'organization/VoucherpinController',
      'organization/CreateVoucherPinController',
      'organization/DiscountsController',
      'organization/CreateDiscountsController',
      'organization/ViewDiscountsController',
      'organization/EditDiscountsController',
      'organization/CurrencyDetailsController',
      'organization/CreateCurrencyDetailsController',
      'organization/ViewCurrencyDetailsController',
      'organization/EditCurrencyDetailsController',
      'logistics/inventory/InventoryController',
      'import/ImportController',
      'import/AddImportFileController',
      'import/ViewImportController',
      'organization/ServicesController',
      'organization/CreateServiceController',
      'organization/ViewServiceController',
      'organization/EditServiceController',
      'organization/MessageController',
      'organization/CreateMessageController',
      'organization/ViewMessageController',
      'organization/EditMessageController',
      'organization/EventController',
      'organization/CreateEventController',
      'organization/ViewEventController',
      'organization/CreatePriceController',
      'organization/ViewPriceController',
      'organization/ViewEventPriceController',
      'organization/RegionController',
      'organization/CreateRegionController',
      'organization/ViewRegionController',
      'organization/editRegionController',
      'organization/ChargeCodeController',
      'organization/CreateChargeCodeController',
      'organization/ViewChargeCodeController',
      'organization/EditChargeCodeController',
      'organization/TaxMappingController',
      'organization/CreateTaxMappingController',
      'organization/ViewTaxMappingController',
      'organization/EditTaxMappingController',
      'logistics/inventory/grn/AddGRNController',
      'logistics/inventory/grn/EditGRNController',
      'logistics/inventory/grn/ViewGrnController',
      'logistics/inventory/item/ViewItemController',
      'logistics/inventory/item/EditItemController',
      'logistics/inventory/item/CreateItemController',
      'logistics/inventory/CreateItemDetailsController',
      'logistics/inventory/mrn/CreateMrnController',
      'logistics/inventory/CreateSupplierController',
      'logistics/inventory/EditSupplierController',
      'client/AddOwnHardwareController',
      'client/ViewOwnHardwareController',
      'client/EditOwnHardwareController',
      'logistics/inventory/mrn/ViewMrnController',
      'logistics/inventory/mrn/MoveMrnController',
      'logistics/inventory/mrn/ViewMovedMrnController',
      'logistics/inventory/ViewItemDetailController',
      'organization/EventController',
      'organization/EditEventController',  
      'organization/CreateEventPriceController',
      'organization/ViewEventPricesController',
      'organization/EditEventPriceController',
      'crm/tickets/CreateTicketController',
      'crm/tickets/EditTicketController',
      'crm/tickets/CloseTicketController',
      'crm/tickets/TicketController',
      'crm/tickets/ViewTicketController',
      'crm/tickets/AssignedTicketController',
      'client/EditAddressController',
      'client/ViewStatementController',
      'client/OSDMessageController',
      'system/CreateHardwarePlanMappingController',
      'system/ViewHardwarePlanMappingController',
      'system/EditHardwarePlanMappingController',
      'system/CreateServiceMappingController',
      'system/ViewServiceMappingController',
      'system/EditServiceMappingController',
      'client/AssociationController',
      'client/ViewAssociationController',
      'client/EditAssociationController',
      'eventorder/EventOrderController',
      'client/HardwareSwapController',
      'system/CreateProvisioningMappingController',
      'system/EditProvisioningMappingController',
      'paymentgateway/PaymentGatewayController',
      'system/CreateEventActionMappingController',
      'system/ViewEventActionMappingController',
      'system/EditEventActionMappingController',
      'paymentgateway/EditPaymentGatewayController',
      'organization/CreatePromotionController',
      'organization/ViewPromotioncodeController',
      'organization/EditPromotioncodeController',
      'system/SmartSearchController',
      'organization/AddressManageController',
      'organization/AddressTreeviewController',
      'client/PayInvoiceController',
      'client/CreditDistributionController',
      'client/ClientCloseController',
      'system/IpPoolingController',
      'system/IpPoolingController',
      'system/CreateIpPoolingController',
      'organization/ItemSaleController',
      'organization/OfficeAdjustmentsController',
      'organization/OfficePaymentsController',
      'organization/RedemptionController',
      'client/AddCreditCardController',
      'client/AddACHController',
      'client/ViewCardDetailsController',
      'client/EditCardDetailController',
      'client/AddNewCreditCardController',
      'client/AddBillModesController',
      'system/EditIpPoolingController',
      'system/CreatePlanMappingController',
      'system/ViewPlanMappingController',
      'system/EditPlanMappingController',
      'system/EditIpPoolingController',
      'system/DalpayDetailsFormController',
      'system/DalpayButtonController',
      'system/CreateEventValidationController',
      'system/ProvisionController'

    ],
    filters: [
      'StatusLookup',
      'YesOrNo',
      'DateFormat',
      'ConfigLookup'
    ],
    directives: [
      'DataTablesDirective',
      'OverlayDirective',
      'DialogDirective',
      'PanelDirective',
      'BigPanelDirective',
      'OnBlurDirective',
      'LateValidateDirective',
      'TreeviewDirective',
      'CkEditorDirective',
      'FormSubmitValidateDirective',
      'FormValidationsDirective',
      'ScrollbarTopDirective',
      'ApiValidationDirective',
      'RightClickDirective',
      'ContextMenuDirective',
      'AutofocusDirective',
      'ChosenComboboxDirective',
      'NgAutoFocusFunDirective'
    ]
  };
  
  require(_.reduce(_.keys(components), function(list, group) {
    return list.concat(_.map(components[group], function(name) { return group + "/" + name; }));
  }, [
    'routes',
    'initialTasks',
    'webstorage-configuration'
  ]));
});
