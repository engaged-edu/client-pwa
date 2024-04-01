export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** Mongo object id scalar type */
  ObjectId: any;
};

export type AccessExpirationRule = {
  type: AccessExpirationRuleType;
};

export type AccessExpirationRuleDiscriminatorInput = {
  fixedDateExpirationRule?: Maybe<AccessFixedDateExpirationRuleInput>;
  periodExpirationRule?: Maybe<AccessPeriodExpirationRuleInput>;
  type: AccessExpirationRuleType;
};

export enum AccessExpirationRuleFromType {
  PurchaseDate = 'PURCHASE_DATE'
}

export enum AccessExpirationRuleType {
  FixedDate = 'FIXED_DATE',
  Period = 'PERIOD'
}

export type AccessFixedDateExpirationRule = AccessExpirationRule & {
  __typename?: 'AccessFixedDateExpirationRule';
  date: Scalars['DateTime'];
  type: AccessExpirationRuleType;
};

export type AccessFixedDateExpirationRuleInput = {
  date: Scalars['DateTime'];
  type: AccessExpirationRuleType;
};

export type AccessPeriodExpirationRule = AccessExpirationRule & {
  __typename?: 'AccessPeriodExpirationRule';
  amount: Scalars['Float'];
  from: AccessExpirationRuleFromType;
  type: AccessExpirationRuleType;
  unit: TimeUnit;
};

export type AccessPeriodExpirationRuleInput = {
  amount: Scalars['Int'];
  from: AccessExpirationRuleFromType;
  type: AccessExpirationRuleType;
  unit: TimeUnit;
};

export type AccessProduct = EntityCommonFieldsInterface & Product & {
  __typename?: 'AccessProduct';
  _id: Scalars['ObjectId'];
  accessExpirationRule?: Maybe<AccessExpirationRule>;
  accesses: Array<ProductAccess>;
  archivedAt?: Maybe<Scalars['DateTime']>;
  archivedBy?: Maybe<AdminUser>;
  archivedById?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<AdminUser>;
  createdById?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<AdminUser>;
  deletedById?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isBeingUsed?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Array<Metadata>>;
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  prices: Array<ProductPrice>;
  type: ProductType;
  unitLabel?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<AdminUser>;
  updatedById?: Maybe<Scalars['String']>;
};

export type AddInvoiceDiscountLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'AddInvoiceDiscountLog';
  _id: Scalars['ObjectId'];
  after: InvoiceLogState;
  before: InvoiceLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type AddProductPriceLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'AddProductPriceLog';
  _id: Scalars['ObjectId'];
  after: ProductLogState;
  before: ProductLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  complement?: Maybe<Scalars['String']>;
  country: CountryIsoCode;
  location?: Maybe<Array<Scalars['Float']>>;
  neighborhood?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  city?: Maybe<Scalars['String']>;
  complement?: Maybe<Scalars['String']>;
  country: CountryIsoCode;
  location?: Maybe<Array<Scalars['Float']>>;
  neighborhood?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type AdjustedProductPrice = ProductPriceBillingConfig & {
  __typename?: 'AdjustedProductPrice';
  maximumAmount?: Maybe<Scalars['Float']>;
  minimumAmount: Scalars['Float'];
  presetAmount: Scalars['Float'];
  type: ProductPriceBillingType;
};

export type AdjustedProductPriceInput = {
  maximumAmount?: Maybe<Scalars['Float']>;
  minimumAmount: Scalars['Float'];
  presetAmount: Scalars['Float'];
  type: ProductPriceBillingType;
};

export type AdminCreateCourseResponse = {
  __typename?: 'AdminCreateCourseResponse';
  course: Course;
  room: Room;
};

export type AdminCreateStudentResponse = {
  __typename?: 'AdminCreateStudentResponse';
  magicLink: Scalars['String'];
  magicToken: Scalars['String'];
  studentUser: StudentUser;
};

/** Type representing the admin user */
export type AdminUser = {
  __typename?: 'AdminUser';
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  definePasswordNextAccess: Scalars['Boolean'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberCountry?: Maybe<CountryIsoCode>;
  type: UserType;
  updatedAt: Scalars['DateTime'];
};

export type AdminUserAuthResponse = {
  __typename?: 'AdminUserAuthResponse';
  session: Session;
  sessionToken: Scalars['String'];
  user: AdminUser;
};

export type Answer = {
  _id: Scalars['ObjectId'];
  answeredAt: Scalars['DateTime'];
  correct?: Maybe<Scalars['Boolean']>;
  question?: Maybe<Scalars['ObjectId']>;
  type: AnswerType;
};

export type AnswerInput = {
  answerMultipleChoice?: Maybe<AnswerMultipleChoiceInput>;
  answerSingleChoice?: Maybe<AnswerSingleChoiceInput>;
  answerText?: Maybe<AnswerTextInput>;
  answerTrueOrFalse?: Maybe<AnswerTrueOrFalseInput>;
  answerType: AnswerType;
};

export type AnswerMultipleChoice = Answer & {
  __typename?: 'AnswerMultipleChoice';
  _id: Scalars['ObjectId'];
  answeredAt: Scalars['DateTime'];
  correct?: Maybe<Scalars['Boolean']>;
  options?: Maybe<Array<Scalars['ObjectId']>>;
  question?: Maybe<Scalars['ObjectId']>;
  type: AnswerType;
};

export type AnswerMultipleChoiceInput = {
  answeredAt?: Maybe<Scalars['DateTime']>;
  options?: Maybe<Array<Scalars['String']>>;
  question: Scalars['String'];
  type: AnswerType;
};

export type AnswerSingleChoice = Answer & {
  __typename?: 'AnswerSingleChoice';
  _id: Scalars['ObjectId'];
  answeredAt: Scalars['DateTime'];
  correct?: Maybe<Scalars['Boolean']>;
  option?: Maybe<Scalars['ObjectId']>;
  question?: Maybe<Scalars['ObjectId']>;
  type: AnswerType;
};

export type AnswerSingleChoiceInput = {
  answeredAt?: Maybe<Scalars['DateTime']>;
  option?: Maybe<Scalars['String']>;
  question: Scalars['String'];
  type: AnswerType;
};

export type AnswerText = Answer & {
  __typename?: 'AnswerText';
  _id: Scalars['ObjectId'];
  answeredAt: Scalars['DateTime'];
  correct?: Maybe<Scalars['Boolean']>;
  question?: Maybe<Scalars['ObjectId']>;
  text?: Maybe<Scalars['String']>;
  type: AnswerType;
};

export type AnswerTextInput = {
  answeredAt?: Maybe<Scalars['DateTime']>;
  question: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  type: AnswerType;
};

export type AnswerTrueOrFalse = Answer & {
  __typename?: 'AnswerTrueOrFalse';
  _id: Scalars['ObjectId'];
  answeredAt: Scalars['DateTime'];
  correct?: Maybe<Scalars['Boolean']>;
  option?: Maybe<Scalars['ObjectId']>;
  question?: Maybe<Scalars['ObjectId']>;
  type: AnswerType;
};

export type AnswerTrueOrFalseInput = {
  answeredAt?: Maybe<Scalars['DateTime']>;
  option?: Maybe<Scalars['String']>;
  question: Scalars['String'];
  type: AnswerType;
};

export enum AnswerType {
  MultipleChoice = 'MULTIPLE_CHOICE',
  SingleChoice = 'SINGLE_CHOICE',
  Text = 'TEXT',
  TrueOrFalse = 'TRUE_OR_FALSE'
}

export type Anticipation = {
  __typename?: 'Anticipation';
  _id: Scalars['ObjectId'];
  amount: Scalars['Float'];
  anticipationGatewayFeeAmount?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  currency: Currency;
  description?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  pagarmeExternalId?: Maybe<Scalars['String']>;
  paymentDate: Scalars['DateTime'];
  recipient?: Maybe<Recipient>;
  recipientId?: Maybe<Scalars['String']>;
  status: AnticipationStatus;
  timeframe: AnticipationTimeframe;
  updatedAt: Scalars['DateTime'];
};

export type AnticipationLogState = {
  __typename?: 'AnticipationLogState';
  anticipation: Anticipation;
};

export type AnticipationOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export enum AnticipationStatus {
  Approved = 'APPROVED',
  Building = 'BUILDING',
  Canceled = 'CANCELED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Preparing = 'PREPARING',
  Refused = 'REFUSED'
}

export enum AnticipationTimeframe {
  End = 'END',
  Start = 'START'
}

export type ArchiveProductPriceLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'ArchiveProductPriceLog';
  _id: Scalars['ObjectId'];
  after: ProductLogState;
  before: ProductLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type AttachPaymentScheduleToInvoiceLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'AttachPaymentScheduleToInvoiceLog';
  _id: Scalars['ObjectId'];
  after: AttachPaymentScheduleToInvoiceLogState;
  before: AttachPaymentScheduleToInvoiceLogState;
  createdAt: Scalars['DateTime'];
  isSharedAttachment?: Maybe<Scalars['Boolean']>;
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type AttachPaymentScheduleToInvoiceLogState = {
  __typename?: 'AttachPaymentScheduleToInvoiceLogState';
  attachedInvoice: Invoice;
  paymentSchedules: Array<PaymentSchedule>;
  payments: Array<Payment>;
};

export type AttachPaymentToInvoiceLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'AttachPaymentToInvoiceLog';
  _id: Scalars['ObjectId'];
  after: AttachPaymentToInvoiceLogState;
  before: AttachPaymentToInvoiceLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type AttachPaymentToInvoiceLogState = {
  __typename?: 'AttachPaymentToInvoiceLogState';
  invoice: Invoice;
  payment: Payment;
};

export type AttachUserToInvoiceAccessesResponse = {
  __typename?: 'AttachUserToInvoiceAccessesResponse';
  status: Scalars['String'];
};

export type AttachmentsContentBlockV1 = ContentBlock & {
  __typename?: 'AttachmentsContentBlockV1';
  _id: Scalars['ObjectId'];
  component: ContentBlockComponentType;
  referencedFileIds: Array<Scalars['String']>;
  referencedFiles?: Maybe<Array<FilestackS3File>>;
};

export type AttachmentsContentBlockV1Input = {
  component: ContentBlockComponentType;
  referencedFiles?: Maybe<Array<Scalars['String']>>;
};

export type BalanceOperation = {
  __typename?: 'BalanceOperation';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  feeAmount: Scalars['Int'];
  id: Scalars['String'];
};

export type Bank = {
  __typename?: 'Bank';
  _id: Scalars['ObjectId'];
  code: Scalars['String'];
  country: CountryIsoCode;
  createdAt: Scalars['DateTime'];
  currency: Currency;
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type BankAccount = {
  __typename?: 'BankAccount';
  _id: Scalars['ObjectId'];
  accountDigit?: Maybe<Scalars['String']>;
  accountNumber?: Maybe<Scalars['String']>;
  accountType?: Maybe<BankAccountType>;
  bank?: Maybe<Bank>;
  bankId?: Maybe<Scalars['String']>;
  branchDigit?: Maybe<Scalars['String']>;
  branchNumber?: Maybe<Scalars['String']>;
  country: CountryIsoCode;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  currency: Currency;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  holderName: Scalars['String'];
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  pagarmeExternalId?: Maybe<Scalars['String']>;
  recipient?: Maybe<Recipient>;
  recipientId?: Maybe<Scalars['String']>;
  stripeExternalId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
};

export type BankAccountLogState = {
  __typename?: 'BankAccountLogState';
  bankAccount: BankAccount;
};

export type BankAccountOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export enum BankAccountType {
  CheckingAccount = 'CHECKING_ACCOUNT',
  JointCheckingAccount = 'JOINT_CHECKING_ACCOUNT',
  JointSavingsAccount = 'JOINT_SAVINGS_ACCOUNT',
  SavingsAccount = 'SAVINGS_ACCOUNT'
}

export type BankOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  name?: Maybe<OrderByDirection>;
  order?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type BankPagePaginationInput = {
  /** default: 1000, max: 1000 */
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type BankSlipPayment = EntityCommonFieldsInterface & Payment & {
  __typename?: 'BankSlipPayment';
  _id: Scalars['ObjectId'];
  amount: Scalars['Int'];
  checkout?: Maybe<Checkout>;
  checkoutId?: Maybe<Scalars['String']>;
  checkoutSharedId?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  currency?: Maybe<Currency>;
  description?: Maybe<Scalars['String']>;
  expirationDate: Scalars['DateTime'];
  failCode?: Maybe<Scalars['String']>;
  failMessage?: Maybe<Scalars['String']>;
  hasGeneratingSharedPaymentSchedules: Scalars['Boolean'];
  invoice?: Maybe<Invoice>;
  invoiceId?: Maybe<Scalars['String']>;
  invoicePaymentLink?: Maybe<InvoicePaymentLink>;
  invoicePaymentLinkId?: Maybe<Scalars['String']>;
  modality: PaymentModality;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  pagarmeExternalId?: Maybe<Scalars['String']>;
  paymentMethod: PaymentMethod;
  paymentSchedule?: Maybe<PaymentSchedule>;
  paymentScheduleId?: Maybe<Scalars['String']>;
  paymentScheduleSharedId?: Maybe<Scalars['String']>;
  pdfUrl: Scalars['String'];
  planConfig?: Maybe<PlanConfig>;
  planConfigId?: Maybe<Scalars['String']>;
  planConfigSharedId: Scalars['String'];
  purchase?: Maybe<Purchase>;
  purchaseId?: Maybe<Scalars['String']>;
  refundedAmount?: Maybe<Scalars['Float']>;
  refunds: Array<Refund>;
  scheduleInstallment?: Maybe<Scalars['Int']>;
  scheduleTotalAmount?: Maybe<Scalars['Int']>;
  scheduleTotalInstallments?: Maybe<Scalars['Int']>;
  splitConfig?: Maybe<SplitConfig>;
  splitConfigId?: Maybe<Scalars['String']>;
  status?: Maybe<PaymentStatus>;
  statusAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
  userPaymentProfile?: Maybe<UserPaymentProfile>;
  userPaymentProfileId?: Maybe<Scalars['String']>;
  userPaymentProfileSharedId: Scalars['String'];
};

export type BankSlipPaymentOperation = Operation & {
  __typename?: 'BankSlipPaymentOperation';
  balanceOperation: BalanceOperation;
  payable: Payable;
  payment: Payment;
  type: OperationType;
};

export type BankSlipRefundFeeOperation = Operation & {
  __typename?: 'BankSlipRefundFeeOperation';
  balanceOperation: BalanceOperation;
  payable: Payable;
  payment: Payment;
  type: OperationType;
};

export type BankSlipRefundOperation = Operation & {
  __typename?: 'BankSlipRefundOperation';
  balanceOperation: BalanceOperation;
  payable: Payable;
  payment: Payment;
  refund: Refund;
  type: OperationType;
};

export type BankSlipRefundReversalOperation = Operation & {
  __typename?: 'BankSlipRefundReversalOperation';
  balanceOperation: BalanceOperation;
  payable: Payable;
  payment: Payment;
  type: OperationType;
};

export type BankWhereInput = {
  and?: Maybe<Array<BankWhereInput>>;
  code?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateFilterInput>;
  isActive?: Maybe<BooleanFilterInput>;
  name?: Maybe<StringFilterInput>;
  or?: Maybe<Array<BankWhereInput>>;
  order?: Maybe<NumberFilterInput>;
  updatedAt?: Maybe<DateFilterInput>;
};

export type BooleanFilterInput = {
  eq?: Maybe<Scalars['Boolean']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type CancelAnticipationLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CancelAnticipationLog';
  _id: Scalars['ObjectId'];
  after: AnticipationLogState;
  before: AnticipationLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CancelWithdrawalLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CancelWithdrawalLog';
  _id: Scalars['ObjectId'];
  after: WithdrawalLogState;
  before: WithdrawalLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type Card = {
  __typename?: 'Card';
  _id: Scalars['ObjectId'];
  brand: Scalars['String'];
  country?: Maybe<CountryIsoCode>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  expirationDate: Scalars['String'];
  firstDigits: Scalars['String'];
  holderName: Scalars['String'];
  lastDigits: Scalars['String'];
  organization?: Maybe<Organization>;
  organizationId: Scalars['String'];
  pagarmeExternalId?: Maybe<Scalars['String']>;
  paymentSchedules: Array<PaymentSchedule>;
  studentUserId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<StudentUser>;
};

export type CardLogState = {
  __typename?: 'CardLogState';
  card: Card;
};

export type CardOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type CardWhereInput = {
  and?: Maybe<Array<CardWhereInput>>;
  brand?: Maybe<StringFilterInput>;
  country?: Maybe<CountryEnumFilterInput>;
  createdAt?: Maybe<DateFilterInput>;
  holderName?: Maybe<StringFilterInput>;
  or?: Maybe<Array<CardWhereInput>>;
  paymentDate?: Maybe<DateFilterInput>;
  updatedAt?: Maybe<DateFilterInput>;
};

export type Certificate = {
  __typename?: 'Certificate';
  _id: Scalars['ObjectId'];
  certificateTemplate?: Maybe<CertificateTemplate>;
  certificateTemplateId?: Maybe<Scalars['String']>;
  certificateTemplateSharedId: Scalars['String'];
  course?: Maybe<Course>;
  courseId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<AdminUser>;
  createdById?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['ObjectId']>;
  emissionSource?: Maybe<CertificateEmissionSource>;
  expiredAt?: Maybe<Scalars['DateTime']>;
  import?: Maybe<Import>;
  importId?: Maybe<Scalars['String']>;
  latest: Scalars['Boolean'];
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  pageUrl?: Maybe<Scalars['String']>;
  payload: CertificatePayload;
  pdf?: Maybe<File>;
  pdfId?: Maybe<Scalars['String']>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['String']>;
  sharedId: Scalars['String'];
  suppressCommunication?: Maybe<Scalars['Boolean']>;
  thumbnail?: Maybe<File>;
  thumbnailId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export enum CertificateEmissionSource {
  AdminImport = 'ADMIN_IMPORT',
  AdminManual = 'ADMIN_MANUAL',
  StudentManualCourseCompletion = 'STUDENT_MANUAL_COURSE_COMPLETION'
}

export type CertificateFeatureConfig = {
  __typename?: 'CertificateFeatureConfig';
  customDynamicField?: Maybe<FeatureConfig>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type CertificateFeatureConfigInput = {
  customDynamicField?: Maybe<FeatureConfigInput>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type CertificateLogState = {
  __typename?: 'CertificateLogState';
  certificate: Certificate;
};

export type CertificateOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  payload?: Maybe<CertificatePayloadOrderByInput>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type CertificatePayload = {
  __typename?: 'CertificatePayload';
  courseName?: Maybe<Scalars['String']>;
  customDynamicFields?: Maybe<Array<Metadata>>;
  emissionDate?: Maybe<Scalars['DateTime']>;
  roomName?: Maybe<Scalars['String']>;
  studentEmail: Scalars['String'];
  studentName: Scalars['String'];
};

export type CertificatePayloadInput = {
  courseName?: Maybe<Scalars['String']>;
  customDynamicFields?: Maybe<Array<MetadataInput>>;
  emissionDate?: Maybe<Scalars['DateTime']>;
  roomName?: Maybe<Scalars['String']>;
  studentEmail?: Maybe<Scalars['String']>;
  studentName?: Maybe<Scalars['String']>;
};

export type CertificatePayloadOrderByInput = {
  emissionDate?: Maybe<OrderByDirection>;
  studentEmail?: Maybe<OrderByDirection>;
  studentName?: Maybe<OrderByDirection>;
};

export type CertificateTemplate = {
  __typename?: 'CertificateTemplate';
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  customDynamicFields: Array<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  dynamicFields: Array<Scalars['String']>;
  latest: Scalars['Boolean'];
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  pages: Array<CertificateTemplatePage>;
  sharedId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type CertificateTemplateContent = {
  _id: Scalars['ObjectId'];
  type: CertificateTemplateContentType;
  width: Scalars['Float'];
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type CertificateTemplateContentInput = {
  certificateTemplateStaticImageContent?: Maybe<CertificateTemplateStaticImageContentInput>;
  certificateTemplateTextContent?: Maybe<CertificateTemplateTextContentInput>;
  contentType: CertificateTemplateContentType;
};

export enum CertificateTemplateContentType {
  StaticImage = 'STATIC_IMAGE',
  Text = 'TEXT'
}

export enum CertificateTemplateFontType {
  AlexBrush = 'ALEX_BRUSH',
  Courier = 'COURIER',
  CourierPrime = 'COURIER_PRIME',
  FiraMono = 'FIRA_MONO',
  FiraSans = 'FIRA_SANS',
  Merriweather = 'MERRIWEATHER',
  PlayfairDisplay = 'PLAYFAIR_DISPLAY',
  Roboto = 'ROBOTO',
  Tinos = 'TINOS'
}

export type CertificateTemplateOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  name?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type CertificateTemplatePage = {
  __typename?: 'CertificateTemplatePage';
  _id: Scalars['ObjectId'];
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<File>;
  backgroundImageId?: Maybe<Scalars['String']>;
  content: Array<CertificateTemplateContent>;
  height: Scalars['Float'];
  width: Scalars['Float'];
};

export type CertificateTemplatePageInput = {
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<Scalars['String']>;
  content?: Maybe<Array<CertificateTemplateContentInput>>;
  height: Scalars['Float'];
  width: Scalars['Float'];
};

export type CertificateTemplateStaticImageContent = CertificateTemplateContent & {
  __typename?: 'CertificateTemplateStaticImageContent';
  _id: Scalars['ObjectId'];
  file?: Maybe<File>;
  fileId?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  link?: Maybe<Scalars['String']>;
  type: CertificateTemplateContentType;
  width: Scalars['Float'];
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type CertificateTemplateStaticImageContentInput = {
  file: Scalars['String'];
  height: Scalars['Float'];
  link?: Maybe<Scalars['String']>;
  type: CertificateTemplateContentType;
  width?: Maybe<Scalars['Float']>;
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type CertificateTemplateTextContent = CertificateTemplateContent & {
  __typename?: 'CertificateTemplateTextContent';
  _id: Scalars['ObjectId'];
  alignment?: Maybe<Scalars['String']>;
  text: Array<CertificateTemplateTextContentText>;
  type: CertificateTemplateContentType;
  width: Scalars['Float'];
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type CertificateTemplateTextContentInput = {
  alignment?: Maybe<Scalars['String']>;
  text: Array<CertificateTemplateTextContentTextInput>;
  type: CertificateTemplateContentType;
  width?: Maybe<Scalars['Float']>;
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type CertificateTemplateTextContentText = {
  __typename?: 'CertificateTemplateTextContentText';
  background?: Maybe<Scalars['String']>;
  bold?: Maybe<Scalars['Boolean']>;
  characterSpacing?: Maybe<Scalars['Float']>;
  color?: Maybe<Scalars['String']>;
  font?: Maybe<CertificateTemplateFontType>;
  fontSize?: Maybe<Scalars['Float']>;
  italics?: Maybe<Scalars['Boolean']>;
  lineHeight?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  strike?: Maybe<Scalars['Boolean']>;
  underline?: Maybe<Scalars['Boolean']>;
  value: Scalars['String'];
};

export type CertificateTemplateTextContentTextInput = {
  background?: Maybe<Scalars['String']>;
  bold?: Maybe<Scalars['Boolean']>;
  characterSpacing?: Maybe<Scalars['Float']>;
  color?: Maybe<Scalars['String']>;
  font?: Maybe<CertificateTemplateFontType>;
  fontSize?: Maybe<Scalars['Float']>;
  italics?: Maybe<Scalars['Boolean']>;
  lineHeight?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  strike?: Maybe<Scalars['Boolean']>;
  underline?: Maybe<Scalars['Boolean']>;
  value: Scalars['String'];
};

export type Chapter = {
  __typename?: 'Chapter';
  _id: Scalars['ObjectId'];
  course: Course;
  courseId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdBy: User;
  createdById: Scalars['String'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  organization: Organization;
  organizationId: Scalars['String'];
  status?: Maybe<ChapterStatus>;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
  usedBy: Array<Scalars['String']>;
};

export type ChapterOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  name?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export enum ChapterStatus {
  Archived = 'ARCHIVED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Checkout = {
  __typename?: 'Checkout';
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<AdminUser>;
  createdById?: Maybe<Scalars['String']>;
  currency: Currency;
  description?: Maybe<Scalars['String']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  invoiceDiscountedAmount: Scalars['Int'];
  invoiceDiscounts?: Maybe<Array<InvoiceDiscount>>;
  invoiceItems: Array<InvoiceItem>;
  invoiceItemsAmount: Scalars['Int'];
  invoiceTotalAmount: Scalars['Int'];
  latest: Scalars['Boolean'];
  organization: Organization;
  organizationId?: Maybe<Scalars['String']>;
  paymentMethodsConfig: CheckoutPaymentMethodsConfig;
  sharedCreatedAt: Scalars['DateTime'];
  sharedId: Scalars['String'];
  splitConfig: SplitConfig;
  splitConfigId?: Maybe<Scalars['String']>;
  status?: Maybe<CheckoutStatus>;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<AdminUser>;
  updatedById?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CheckoutBankSlipConfig = {
  __typename?: 'CheckoutBankSlipConfig';
  enabled?: Maybe<Scalars['Boolean']>;
  expirationRule?: Maybe<InvoicePaymentLinkExpirationRule>;
};

export type CheckoutBankSlipConfigInput = {
  enabled?: Maybe<Scalars['Boolean']>;
  expirationRule?: Maybe<InvoicePaymentLinkBankSlipExpirationRuleDiscriminatorInput>;
};

export type CheckoutCreditCardConfig = {
  __typename?: 'CheckoutCreditCardConfig';
  enabled?: Maybe<Scalars['Boolean']>;
  installmentsRule?: Maybe<InvoicePaymentLinkCreditCardInstallmentsRule>;
};

export type CheckoutCreditCardConfigInput = {
  enabled?: Maybe<Scalars['Boolean']>;
  installmentsRule?: Maybe<InvoicePaymentLinkCreditCardInstallmentsRuleDiscriminatorInput>;
};

export type CheckoutInvoiceItemWhereInput = {
  type?: Maybe<InvoiceItemStatusEnumFilterInput>;
};

export type CheckoutLogState = {
  __typename?: 'CheckoutLogState';
  checkout: Checkout;
};

export type CheckoutOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  currency?: Maybe<OrderByDirection>;
  invoiceDiscountedAmount?: Maybe<OrderByDirection>;
  invoiceItemsAmount?: Maybe<OrderByDirection>;
  invoiceTotalAmount?: Maybe<OrderByDirection>;
  status?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type CheckoutPaymentCreationInput = {
  cardId?: Maybe<Scalars['String']>;
  cardToken?: Maybe<Scalars['String']>;
  installments?: Maybe<Scalars['Float']>;
  paymentMethod: PaymentMethod;
  saveUserCard?: Maybe<Scalars['Boolean']>;
};

export type CheckoutPaymentMethodsConfig = {
  __typename?: 'CheckoutPaymentMethodsConfig';
  bankSlip?: Maybe<CheckoutBankSlipConfig>;
  creditCard?: Maybe<CheckoutCreditCardConfig>;
  pix?: Maybe<CheckoutPixConfig>;
};

export type CheckoutPaymentMethodsConfigInput = {
  bankSlip?: Maybe<CheckoutBankSlipConfigInput>;
  creditCard?: Maybe<CheckoutCreditCardConfigInput>;
  pix?: Maybe<CheckoutPixConfigInput>;
};

export type CheckoutPixConfig = {
  __typename?: 'CheckoutPixConfig';
  enabled?: Maybe<Scalars['Boolean']>;
  expirationRule?: Maybe<InvoicePaymentLinkExpirationRule>;
};

export type CheckoutPixConfigInput = {
  enabled?: Maybe<Scalars['Boolean']>;
  expirationRule?: Maybe<InvoicePaymentLinkPixExpirationRuleDiscriminatorInput>;
};

export enum CheckoutStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type CheckoutStatusEnumFilterInput = {
  eq?: Maybe<CheckoutStatus>;
  exists?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<CheckoutStatus>>;
};

export type CheckoutUpsertStudentInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberCountry?: Maybe<CountryIsoCode>;
};

export type CheckoutUpsertUserPProfileInput = {
  address?: Maybe<AddressInput>;
  country: CountryIsoCode;
  currency: Currency;
  name: Scalars['String'];
  taxIds?: Maybe<Array<TaxIdInput>>;
  type: LegalPersonType;
};

export type CheckoutWhereInput = {
  and?: Maybe<Array<CheckoutWhereInput>>;
  createdAt?: Maybe<DateFilterInput>;
  currency?: Maybe<CurrencyEnumFilterInput>;
  description?: Maybe<StringFilterInput>;
  invoiceDiscountedAmount?: Maybe<NumberFilterInput>;
  invoiceItems?: Maybe<CheckoutInvoiceItemWhereInput>;
  invoiceItemsAmount?: Maybe<NumberFilterInput>;
  invoiceTotalAmount?: Maybe<NumberFilterInput>;
  latest?: Maybe<BooleanFilterInput>;
  or?: Maybe<Array<CheckoutWhereInput>>;
  status?: Maybe<CheckoutStatusEnumFilterInput>;
  updatedAt?: Maybe<DateFilterInput>;
};

export type CohortProductAccess = ProductAccess & {
  __typename?: 'CohortProductAccess';
  accessExpirationRule?: Maybe<AccessExpirationRule>;
  type: ProductAccessType;
};

export type CohortProductAccessInput = {
  accessExpirationRule?: Maybe<AccessExpirationRuleDiscriminatorInput>;
  type: ProductAccessType;
};

export type Constraint = {
  constraintType: ConstraintType;
};

export enum ConstraintType {
  Date = 'DATE',
  Progress = 'PROGRESS'
}

export type ContentBlock = {
  _id: Scalars['ObjectId'];
  component: ContentBlockComponentType;
  referencedFileIds: Array<Scalars['String']>;
  referencedFiles?: Maybe<Array<FilestackS3File>>;
};

export enum ContentBlockComponentType {
  AttachmentsContentV1 = 'ATTACHMENTS_CONTENT_V1',
  EmbedContentV1 = 'EMBED_CONTENT_V1',
  QuestionnaireContentV1 = 'QUESTIONNAIRE_CONTENT_V1',
  TextContentV1 = 'TEXT_CONTENT_V1',
  VideoContentV1 = 'VIDEO_CONTENT_V1'
}

export type ContentBlockInput = {
  attachmentsContentBlockV1?: Maybe<AttachmentsContentBlockV1Input>;
  componentType: ContentBlockComponentType;
  embedContentBlockV1?: Maybe<EmbedContentBlockV1Input>;
  questionnaireContentBlockV1?: Maybe<QuestionnaireContentBlockV1Input>;
  textContentBlockV1?: Maybe<TextContentBlockV1Input>;
  videoContentBlockV1?: Maybe<VideoContentBlockV1Input>;
};

export type CopyCertificateTemplateLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CopyCertificateTemplateLog';
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  meta: CopyCertificateTemplateLogMetadata;
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CopyCertificateTemplateLogMetadata = {
  __typename?: 'CopyCertificateTemplateLogMetadata';
  newTemplateName: Scalars['String'];
  newTemplateSharedId: Scalars['String'];
  targetOrganizationId: Scalars['String'];
  targetOrganizationName: Scalars['String'];
};

export type CopyCertificateTemplateResponse = {
  __typename?: 'CopyCertificateTemplateResponse';
  status: Scalars['String'];
};

export type CountryEnumFilterInput = {
  eq?: Maybe<CountryIsoCode>;
  exists?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<CountryIsoCode>>;
};

export enum CountryIsoCode {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Xk = 'XK',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export type Course = {
  __typename?: 'Course';
  _id: Scalars['ObjectId'];
  backgroundImage?: Maybe<FilestackS3File>;
  backgroundImageId?: Maybe<Scalars['String']>;
  certificateTemplateSharedId?: Maybe<Scalars['String']>;
  completionPercent?: Maybe<Scalars['Float']>;
  content: Array<CourseContent>;
  createdAt: Scalars['DateTime'];
  createdBy: User;
  createdById: Scalars['String'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  organization: Organization;
  organizationId: Scalars['String'];
  rooms: Array<Room>;
  slug?: Maybe<Scalars['String']>;
  status: CourseStatus;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
};

export type CourseContent = {
  __typename?: 'CourseContent';
  _id: Scalars['ObjectId'];
  chapter: Chapter;
  chapterId: Scalars['String'];
  lessonIds: Array<Scalars['String']>;
  lessons: Array<Lesson>;
};

export type CourseContentField = {
  chapter: Scalars['String'];
  lessons: Array<Scalars['String']>;
};

export type CourseOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  name?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type CoursePaginationInput = {
  /** default: 300, max: 300 */
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type CourseProductAccess = ProductAccess & {
  __typename?: 'CourseProductAccess';
  accessExpirationRule?: Maybe<AccessExpirationRule>;
  course?: Maybe<Course>;
  courseId?: Maybe<Scalars['String']>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['String']>;
  type: ProductAccessType;
};

export type CourseProductAccessInput = {
  accessExpirationRule?: Maybe<AccessExpirationRuleDiscriminatorInput>;
  courseId?: Maybe<Scalars['String']>;
  roomId?: Maybe<Scalars['String']>;
  type: ProductAccessType;
};

export enum CourseStatus {
  Archived = 'ARCHIVED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type CourseWhereInput = {
  and?: Maybe<Array<CourseWhereInput>>;
  name?: Maybe<StringFilterInput>;
  or?: Maybe<Array<CourseWhereInput>>;
};

export type CreateAnticipationLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreateAnticipationLog';
  _id: Scalars['ObjectId'];
  after: AnticipationLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreateBankAccountLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreateBankAccountLog';
  _id: Scalars['ObjectId'];
  after: BankAccountLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreateCardLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreateCardLog';
  _id: Scalars['ObjectId'];
  after: CardLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreateCertificateLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreateCertificateLog';
  _id: Scalars['ObjectId'];
  after: CertificateLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreateCertificateTemplateFromCopyLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreateCertificateTemplateFromCopyLog';
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  meta: CreateCertificateTemplateFromCopyLogMetadata;
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreateCertificateTemplateFromCopyLogMetadata = {
  __typename?: 'CreateCertificateTemplateFromCopyLogMetadata';
  fromOrganizationId: Scalars['String'];
  fromOrganizationName: Scalars['String'];
  fromTemplateName: Scalars['String'];
  fromTemplateSharedId: Scalars['String'];
};

export type CreateCheckoutLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreateCheckoutLog';
  _id: Scalars['ObjectId'];
  after: CheckoutLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreateImportLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreateImportLog';
  _id: Scalars['ObjectId'];
  after: ImportLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreateInvoiceAccessLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreateInvoiceAccessLog';
  _id: Scalars['ObjectId'];
  after: InvoiceAccessLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreateInvoiceLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreateInvoiceLog';
  _id: Scalars['ObjectId'];
  after: InvoiceLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreateInvoicePaymentLinkLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreateInvoicePaymentLinkLog';
  _id: Scalars['ObjectId'];
  after: InvoicePaymentLinkLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreateMemberLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreateMemberLog';
  _id: Scalars['ObjectId'];
  after: MemberLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreatePaymentLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreatePaymentLog';
  _id: Scalars['ObjectId'];
  after: PaymentLogState;
  createdAt: Scalars['DateTime'];
  duplicatedBy?: Maybe<PaymentLogState>;
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreatePaymentScheduleLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreatePaymentScheduleLog';
  _id: Scalars['ObjectId'];
  after: PaymentScheduleLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreatePlanConfigLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreatePlanConfigLog';
  _id: Scalars['ObjectId'];
  after: PlanConfigLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreatePolicyLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreatePolicyLog';
  _id: Scalars['ObjectId'];
  after: PolicyLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreateProductLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreateProductLog';
  _id: Scalars['ObjectId'];
  after: ProductLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreatePurchaseLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreatePurchaseLog';
  _id: Scalars['ObjectId'];
  after: PurchaseLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreateRecipientLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreateRecipientLog';
  _id: Scalars['ObjectId'];
  after: RecipientLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreateRefundLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreateRefundLog';
  _id: Scalars['ObjectId'];
  after: RefundLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreateSplitConfigLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreateSplitConfigLog';
  _id: Scalars['ObjectId'];
  after: SplitConfigLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreateUserPaymentProfileLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreateUserPaymentProfileLog';
  _id: Scalars['ObjectId'];
  after: UserPaymentProfileLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreateWithdrawalLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'CreateWithdrawalLog';
  _id: Scalars['ObjectId'];
  after: WithdrawalLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type CreditCardAnticipatedPayablePaymentOperation = Operation & {
  __typename?: 'CreditCardAnticipatedPayablePaymentOperation';
  anticipation: Anticipation;
  balanceOperation: BalanceOperation;
  payable: Payable;
  payment: Payment;
  type: OperationType;
};

export type CreditCardPayableChargebackOperation = Operation & {
  __typename?: 'CreditCardPayableChargebackOperation';
  balanceOperation: BalanceOperation;
  payable: Payable;
  payment: Payment;
  type: OperationType;
};

export type CreditCardPayableChargebackRefundOperation = Operation & {
  __typename?: 'CreditCardPayableChargebackRefundOperation';
  balanceOperation: BalanceOperation;
  payable: Payable;
  payment: Payment;
  type: OperationType;
};

export type CreditCardPayablePaymentOperation = Operation & {
  __typename?: 'CreditCardPayablePaymentOperation';
  balanceOperation: BalanceOperation;
  payable: Payable;
  payment: Payment;
  type: OperationType;
};

export type CreditCardPayableRefundOperation = Operation & {
  __typename?: 'CreditCardPayableRefundOperation';
  balanceOperation: BalanceOperation;
  payable: Payable;
  payment: Payment;
  refund: Refund;
  type: OperationType;
};

export type CreditCardPayment = EntityCommonFieldsInterface & Payment & {
  __typename?: 'CreditCardPayment';
  _id: Scalars['ObjectId'];
  amount: Scalars['Int'];
  brand: Scalars['String'];
  card?: Maybe<Card>;
  cardExpirationDate: Scalars['String'];
  cardId?: Maybe<Scalars['String']>;
  checkout?: Maybe<Checkout>;
  checkoutId?: Maybe<Scalars['String']>;
  checkoutSharedId?: Maybe<Scalars['String']>;
  country?: Maybe<CountryIsoCode>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  currency?: Maybe<Currency>;
  description?: Maybe<Scalars['String']>;
  failCode?: Maybe<Scalars['String']>;
  failMessage?: Maybe<Scalars['String']>;
  firstDigits: Scalars['String'];
  hasGeneratingSharedPaymentSchedules: Scalars['Boolean'];
  holderName: Scalars['String'];
  installments: Scalars['Int'];
  invoice?: Maybe<Invoice>;
  invoiceId?: Maybe<Scalars['String']>;
  invoicePaymentLink?: Maybe<InvoicePaymentLink>;
  invoicePaymentLinkId?: Maybe<Scalars['String']>;
  lastDigits: Scalars['String'];
  modality: PaymentModality;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  pagarmeExternalId?: Maybe<Scalars['String']>;
  paymentMethod: PaymentMethod;
  paymentSchedule?: Maybe<PaymentSchedule>;
  paymentScheduleId?: Maybe<Scalars['String']>;
  paymentScheduleSharedId?: Maybe<Scalars['String']>;
  planConfig?: Maybe<PlanConfig>;
  planConfigId?: Maybe<Scalars['String']>;
  planConfigSharedId: Scalars['String'];
  purchase?: Maybe<Purchase>;
  purchaseId?: Maybe<Scalars['String']>;
  refundedAmount?: Maybe<Scalars['Float']>;
  refunds: Array<Refund>;
  scheduleInstallment?: Maybe<Scalars['Int']>;
  scheduleTotalAmount?: Maybe<Scalars['Int']>;
  scheduleTotalInstallments?: Maybe<Scalars['Int']>;
  splitConfig?: Maybe<SplitConfig>;
  splitConfigId?: Maybe<Scalars['String']>;
  status?: Maybe<PaymentStatus>;
  statusAt: Scalars['DateTime'];
  token?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
  userPaymentProfile?: Maybe<UserPaymentProfile>;
  userPaymentProfileId?: Maybe<Scalars['String']>;
  userPaymentProfileSharedId: Scalars['String'];
};

export enum Currency {
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azn = 'AZN',
  Bam = 'BAM',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Brl = 'BRL',
  Bsd = 'BSD',
  Bwp = 'BWP',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Chf = 'CHF',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Crc = 'CRC',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Egp = 'EGP',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gel = 'GEL',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Isk = 'ISK',
  Jmd = 'JMD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kmf = 'KMF',
  Krw = 'KRW',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mro = 'MRO',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Std = 'STD',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Top = 'TOP',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xaf = 'XAF',
  Xcd = 'XCD',
  Xof = 'XOF',
  Xpf = 'XPF',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmw = 'ZMW'
}

export type CurrencyEnumFilterInput = {
  eq?: Maybe<Currency>;
  exists?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Currency>>;
};

export type DateConstraint = Constraint & {
  __typename?: 'DateConstraint';
  constraintType: ConstraintType;
  dateLimit?: Maybe<Scalars['DateTime']>;
  daysLimit?: Maybe<Scalars['Float']>;
  type: DateConstraintType;
};

export type DateConstraintInput = {
  dateLimit?: Maybe<Scalars['DateTime']>;
  daysLimit?: Maybe<Scalars['Float']>;
  type: DateConstraintType;
};

export enum DateConstraintType {
  DaysAfterCourseStart = 'DAYS_AFTER_COURSE_START',
  DaysAfterEnrolment = 'DAYS_AFTER_ENROLMENT',
  FixedDate = 'FIXED_DATE'
}

export type DateFilterInput = {
  eq?: Maybe<Scalars['DateTime']>;
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
};


export type DeleteBankAccountLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'DeleteBankAccountLog';
  _id: Scalars['ObjectId'];
  after: BankAccountLogState;
  before: BankAccountLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type DeleteCardLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'DeleteCardLog';
  _id: Scalars['ObjectId'];
  after: CardLogState;
  before: CardLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type DeleteCertificateLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'DeleteCertificateLog';
  _id: Scalars['ObjectId'];
  before: CertificateLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type DeleteInvoiceDiscountLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'DeleteInvoiceDiscountLog';
  _id: Scalars['ObjectId'];
  after: InvoiceLogState;
  before: InvoiceLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type DeleteInvoicePaymentLinkLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'DeleteInvoicePaymentLinkLog';
  _id: Scalars['ObjectId'];
  after: InvoicePaymentLinkLogState;
  before: InvoicePaymentLinkLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type DeleteMemberLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'DeleteMemberLog';
  _id: Scalars['ObjectId'];
  before: MemberLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type DeletePolicyLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'DeletePolicyLog';
  _id: Scalars['ObjectId'];
  after: PolicyLogState;
  before: PolicyLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type DeleteProductLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'DeleteProductLog';
  _id: Scalars['ObjectId'];
  before: ProductLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type DeleteProductPriceLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'DeleteProductPriceLog';
  _id: Scalars['ObjectId'];
  after: ProductLogState;
  before: ProductLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type DeleteSplitConfigLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'DeleteSplitConfigLog';
  _id: Scalars['ObjectId'];
  after: SplitConfigLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type DeleteUserPaymentProfileLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'DeleteUserPaymentProfileLog';
  _id: Scalars['ObjectId'];
  after: UserPaymentProfileLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type DenormalizedEnrolment = {
  __typename?: 'DenormalizedEnrolment';
  _id: Scalars['ObjectId'];
  courseId: Scalars['ObjectId'];
  courseName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  denormalizedAt: Scalars['DateTime'];
  lastLessonAt?: Maybe<Scalars['DateTime']>;
  lastLessonId?: Maybe<Scalars['ObjectId']>;
  lastLessonName?: Maybe<Scalars['String']>;
  organizationId: Scalars['ObjectId'];
  organizationName: Scalars['String'];
  roomId: Scalars['ObjectId'];
  roomName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userEmail: Scalars['String'];
  userId: Scalars['ObjectId'];
  userName: Scalars['String'];
  userProgress: Scalars['Float'];
};

export type DenormalizedEnrolmentOrderByInput = {
  courseName?: Maybe<OrderByDirection>;
  createdAt?: Maybe<OrderByDirection>;
  lastLessonAt?: Maybe<OrderByDirection>;
  lastLessonName?: Maybe<OrderByDirection>;
  organizationName?: Maybe<OrderByDirection>;
  roomName?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
  userEmail?: Maybe<OrderByDirection>;
  userName?: Maybe<OrderByDirection>;
  userProgress?: Maybe<OrderByDirection>;
};

export type DenormalizedEnrolmentWhereInput = {
  and?: Maybe<Array<DenormalizedEnrolmentWhereInput>>;
  courseName?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateFilterInput>;
  lastLessonAt?: Maybe<DateFilterInput>;
  lastLessonName?: Maybe<StringFilterInput>;
  or?: Maybe<Array<DenormalizedEnrolmentWhereInput>>;
  organizationName?: Maybe<StringFilterInput>;
  roomName?: Maybe<StringFilterInput>;
  updatedAt?: Maybe<DateFilterInput>;
  userEmail?: Maybe<StringFilterInput>;
  userName?: Maybe<StringFilterInput>;
  userProgress?: Maybe<NumberFilterInput>;
};

export type DetachPaymentFromInvoiceLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'DetachPaymentFromInvoiceLog';
  _id: Scalars['ObjectId'];
  after: DetachPaymentFromInvoiceLogState;
  before: DetachPaymentFromInvoiceLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type DetachPaymentFromInvoiceLogState = {
  __typename?: 'DetachPaymentFromInvoiceLogState';
  invoice: Invoice;
  payment: Payment;
};

export type DetachPaymentScheduleFromInvoiceLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'DetachPaymentScheduleFromInvoiceLog';
  _id: Scalars['ObjectId'];
  after: DetachPaymentScheduleFromInvoiceLogState;
  before: DetachPaymentScheduleFromInvoiceLogState;
  createdAt: Scalars['DateTime'];
  isSharedDetachment?: Maybe<Scalars['Boolean']>;
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type DetachPaymentScheduleFromInvoiceLogState = {
  __typename?: 'DetachPaymentScheduleFromInvoiceLogState';
  detachedInvoices: Array<Invoice>;
  paymentSchedules: Array<PaymentSchedule>;
  payments: Array<Payment>;
};

export type Dispute = {
  __typename?: 'Dispute';
  _id: Scalars['ObjectId'];
  amount: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  currency: Currency;
  description?: Maybe<Scalars['String']>;
  payment?: Maybe<Payment>;
  reason: DisputeReason;
  status: DisputeStatus;
  updatedAt: Scalars['DateTime'];
};

export enum DisputeReason {
  BankCannotProcess = 'BANK_CANNOT_PROCESS',
  CheckReturned = 'CHECK_RETURNED',
  CreditNotProcessed = 'CREDIT_NOT_PROCESSED',
  CustomerInitiated = 'CUSTOMER_INITIATED',
  DebitNotAuthorized = 'DEBIT_NOT_AUTHORIZED',
  Duplicate = 'DUPLICATE',
  Fraudulent = 'FRAUDULENT',
  General = 'GENERAL',
  IncorrectAccountDetails = 'INCORRECT_ACCOUNT_DETAILS',
  InsufficientFunds = 'INSUFFICIENT_FUNDS',
  ProductNotReceived = 'PRODUCT_NOT_RECEIVED',
  ProductUnacceptable = 'PRODUCT_UNACCEPTABLE',
  SubscriptionCanceled = 'SUBSCRIPTION_CANCELED',
  Unrecognized = 'UNRECOGNIZED'
}

export enum DisputeStatus {
  ChargeRefunded = 'CHARGE_REFUNDED',
  Lost = 'LOST',
  NeedsResponse = 'NEEDS_RESPONSE',
  UnderReview = 'UNDER_REVIEW',
  WarningClosed = 'WARNING_CLOSED',
  WarningNeedsResponse = 'WARNING_NEEDS_RESPONSE',
  WarningUnderReview = 'WARNING_UNDER_REVIEW',
  Won = 'WON'
}

export type EmbedContentBlockV1 = ContentBlock & {
  __typename?: 'EmbedContentBlockV1';
  _id: Scalars['ObjectId'];
  component: ContentBlockComponentType;
  embedUrl: Scalars['String'];
  referencedFileIds: Array<Scalars['String']>;
  referencedFiles?: Maybe<Array<FilestackS3File>>;
};

export type EmbedContentBlockV1Input = {
  component: ContentBlockComponentType;
  embedUrl?: Maybe<Scalars['String']>;
  referencedFiles?: Maybe<Array<Scalars['String']>>;
};

export type Enrolment = {
  __typename?: 'Enrolment';
  _id: Scalars['ObjectId'];
  course: Course;
  courseId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdBy: User;
  createdById: Scalars['String'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  organization: Organization;
  organizationId: Scalars['String'];
  room: Room;
  roomId: Scalars['String'];
  sources: Array<EnrolmentSource>;
  studentProgress: Scalars['Float'];
  studentUserId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
  user: User;
  userCourseState?: Maybe<UserCourseState>;
};

export type EnrolmentOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type EnrolmentSource = {
  __typename?: 'EnrolmentSource';
  _Id: Scalars['ObjectId'];
  active: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById: Scalars['ObjectId'];
  expirationDate?: Maybe<Scalars['DateTime']>;
  invoice?: Maybe<Invoice>;
  invoiceAccess?: Maybe<InvoiceAccess>;
  product?: Maybe<Product>;
  type: Scalars['String'];
};

export type EntityCommonFieldsInterface = {
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type FeatureConfig = {
  __typename?: 'FeatureConfig';
  enabled?: Maybe<Scalars['Boolean']>;
};

export type FeatureConfigInput = {
  enabled?: Maybe<Scalars['Boolean']>;
};

export type FeatureConfigWPaymentFee = {
  __typename?: 'FeatureConfigWPaymentFee';
  enabled?: Maybe<Scalars['Boolean']>;
  paymentFee?: Maybe<PaymentFee>;
};

export type FeatureConfigWPaymentFeeInput = {
  enabled?: Maybe<Scalars['Boolean']>;
  paymentFee?: Maybe<PaymentFeeInput>;
};

export type FetchCheckoutPurchaseSummaryObj = {
  __typename?: 'FetchCheckoutPurchaseSummaryObj';
  amount: Scalars['Float'];
  count: Scalars['Float'];
  statuses: Array<Scalars['String']>;
};

export type FetchCheckoutPurchaseSummaryResponse = {
  __typename?: 'FetchCheckoutPurchaseSummaryResponse';
  inflow: FetchCheckoutPurchaseSummaryObj;
  outflow: FetchCheckoutPurchaseSummaryObj;
  total: FetchCheckoutPurchaseSummaryObj;
  waitingPayment: FetchCheckoutPurchaseSummaryObj;
};

export type FetchOrganizationCurrentDateResponse = {
  __typename?: 'FetchOrganizationCurrentDateResponse';
  currentDate: Scalars['DateTime'];
  timezone: Scalars['String'];
  utcOffset: Scalars['Float'];
};

export type FetchProcessingPaymentScheduleGenCountResponse = {
  __typename?: 'FetchProcessingPaymentScheduleGenCountResponse';
  count: Scalars['Float'];
};

export type FetchRecipientAnticipationLimitsResponse = {
  __typename?: 'FetchRecipientAnticipationLimitsResponse';
  gatewayMaximumAmount: Scalars['Float'];
  gatewayMinimumAmount: Scalars['Float'];
  preparingAnticipationsAmount: Scalars['Float'];
};

export type FetchRecipientBalanceResponse = {
  __typename?: 'FetchRecipientBalanceResponse';
  expectedAvailableAmount: Scalars['Float'];
  gatewayAvailableAmount: Scalars['Float'];
  gatewayWaitingFundsAmount: Scalars['Float'];
  preparingWithdrawalsAmount: Scalars['Float'];
};

export type FetchRecipientOperationsResponse = {
  __typename?: 'FetchRecipientOperationsResponse';
  currentPage: Scalars['Float'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Operation>;
};

export type FetchRecipientStatisticsResponse = {
  __typename?: 'FetchRecipientStatisticsResponse';
  paymentCount: Scalars['Int'];
};

export type File = {
  _id: Scalars['ObjectId'];
  acl: FileAcl;
  altText?: Maybe<Scalars['String']>;
  contentType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedAtServer?: Maybe<Scalars['Boolean']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  organization: Organization;
  organizationId: Scalars['String'];
  originalName: Scalars['String'];
  size: Scalars['Float'];
  storage: FileStorage;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};

export enum FileAcl {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type FileOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export enum FileStorage {
  FilestackS3 = 'FILESTACK_S3'
}

export type FilestackS3File = EntityCommonFieldsInterface & File & {
  __typename?: 'FilestackS3File';
  _id: Scalars['ObjectId'];
  acl: FileAcl;
  altText?: Maybe<Scalars['String']>;
  container: Scalars['String'];
  contentType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdBy: User;
  createdById: Scalars['String'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedAtServer?: Maybe<Scalars['Boolean']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filestackFileId: Scalars['String'];
  filestackUploadId: Scalars['String'];
  filestackUrl: Scalars['String'];
  key: Scalars['String'];
  organization: Organization;
  organizationId: Scalars['String'];
  originalName: Scalars['String'];
  originalPath: Scalars['String'];
  size: Scalars['Float'];
  source: Scalars['String'];
  storage: FileStorage;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};

export type FixedFee = {
  __typename?: 'FixedFee';
  /** Value in cents */
  amount: Scalars['Int'];
  currency: Currency;
};

export type FixedFeeInput = {
  /** the amount in cents */
  amount: Scalars['Int'];
  currency: Currency;
};

export type GenerateCertificateTemplatePreviewResponse = {
  __typename?: 'GenerateCertificateTemplatePreviewResponse';
  previewPdfBase64: Scalars['String'];
};

export type GenerateExcelResponse = {
  __typename?: 'GenerateExcelResponse';
  base64Excel: Scalars['String'];
};

export type GeneratePaymentSchedulesResponse = {
  __typename?: 'GeneratePaymentSchedulesResponse';
  status: Scalars['String'];
};

export type GivenTimeProductPrice = ProductPricePaymentConfig & {
  __typename?: 'GivenTimeProductPrice';
  interval: ProductPriceInterval;
  paymentCount: Scalars['Float'];
  type: ProductPricePaymentType;
};

export type GivenTimeProductPriceInput = {
  interval: ProductPriceIntervalInput;
  paymentCount: Scalars['Float'];
  type: ProductPricePaymentType;
};

export type GraduatedProductPrice = ProductPriceBillingConfig & {
  __typename?: 'GraduatedProductPrice';
  tiers: Array<Tier>;
  type: ProductPriceBillingType;
};

export type GraduatedProductPriceInput = {
  tiers: Array<TierInput>;
  type: ProductPriceBillingType;
};

export type Import = {
  __typename?: 'Import';
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<AdminUser>;
  createdById?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  file?: Maybe<File>;
  fileId?: Maybe<Scalars['String']>;
  finishedAt?: Maybe<Scalars['DateTime']>;
  organization?: Maybe<Organization>;
  status: ImportStatus;
  title?: Maybe<Scalars['String']>;
  type: ImportType;
  updatedAt: Scalars['DateTime'];
  warningMessage?: Maybe<Scalars['String']>;
};

export type ImportCertificate = {
  __typename?: 'ImportCertificate';
  _id: Scalars['ObjectId'];
  certificateTemplate?: Maybe<CertificateTemplate>;
  certificateTemplateId?: Maybe<Scalars['String']>;
  course?: Maybe<Course>;
  courseId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<AdminUser>;
  createdById?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  file?: Maybe<File>;
  fileId?: Maybe<Scalars['String']>;
  finishedAt?: Maybe<Scalars['DateTime']>;
  organization?: Maybe<Organization>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['String']>;
  status: ImportStatus;
  suppressCommunication?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type: ImportType;
  updatedAt: Scalars['DateTime'];
  warningMessage?: Maybe<Scalars['String']>;
};

export type ImportLogState = {
  __typename?: 'ImportLogState';
  import: Import;
};

export enum ImportStatus {
  Fail = 'FAIL',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export enum ImportType {
  CertificatesV1 = 'CERTIFICATES_V1'
}

export type InlineInvoiceItem = InvoiceItem & {
  __typename?: 'InlineInvoiceItem';
  amount: Scalars['Int'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  type: InvoiceItemType;
};

export type InlineInvoiceItemInput = {
  amount: Scalars['Int'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  type: InvoiceItemType;
};

export type Invoice = {
  __typename?: 'Invoice';
  _id: Scalars['ObjectId'];
  accesses: Array<InvoiceAccess>;
  /** The enabled payment methods of this invoice active payment links. */
  activePaymentLinkPaymentMethods: Array<PaymentMethod>;
  checkout?: Maybe<Checkout>;
  checkoutId?: Maybe<Scalars['String']>;
  checkoutSharedId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<AdminUser>;
  createdById?: Maybe<Scalars['String']>;
  currency: Currency;
  description?: Maybe<Scalars['String']>;
  discountedAmount: Scalars['Int'];
  discounts?: Maybe<Array<InvoiceDiscount>>;
  dueAmount: Scalars['Int'];
  expirationDate?: Maybe<Scalars['DateTime']>;
  hasActivePaymentsAttached: Scalars['Boolean'];
  items: Array<InvoiceItem>;
  itemsAmount: Scalars['Int'];
  organization: Organization;
  organizationId?: Maybe<Scalars['String']>;
  paidAmount: Scalars['Int'];
  purchase?: Maybe<Purchase>;
  purchaseId?: Maybe<Scalars['ObjectId']>;
  refundedAmount: Scalars['Int'];
  splitConfig: SplitConfig;
  splitConfigId?: Maybe<Scalars['String']>;
  status?: Maybe<InvoiceStatus>;
  totalAmount: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<AdminUser>;
  updatedById?: Maybe<Scalars['String']>;
  user: StudentUser;
  userId?: Maybe<Scalars['String']>;
  userPaymentProfile: UserPaymentProfile;
  userPaymentProfileId?: Maybe<Scalars['String']>;
  userPaymentProfileSharedId: Scalars['String'];
};

export type InvoiceAccess = {
  __typename?: 'InvoiceAccess';
  _id: Scalars['ObjectId'];
  checkout?: Maybe<Checkout>;
  checkoutId?: Maybe<Scalars['ObjectId']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<AdminUser>;
  createdById?: Maybe<Scalars['String']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  invitationToken?: Maybe<Scalars['String']>;
  invitationUrl?: Maybe<Scalars['String']>;
  invoice: Invoice;
  invoiceId?: Maybe<Scalars['String']>;
  invoiceItem: Scalars['ObjectId'];
  isInvitationUsed: Scalars['Boolean'];
  isProcessing: Scalars['Boolean'];
  liberationRule?: Maybe<InvoiceAccessLiberationRuleType>;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  origin?: Maybe<InvoiceAccessOrigin>;
  product: Product;
  productId?: Maybe<Scalars['String']>;
  productPrice: Scalars['ObjectId'];
  status: InvoiceAccessStatus;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<AdminUser>;
  updatedById?: Maybe<Scalars['String']>;
  user?: Maybe<StudentUser>;
  userId?: Maybe<Scalars['String']>;
  userIdId?: Maybe<Scalars['ObjectId']>;
};

export type InvoiceAccessLiberationRuleEnumFilterInput = {
  eq?: Maybe<InvoiceAccessLiberationRuleType>;
  exists?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<InvoiceAccessLiberationRuleType>>;
};

export enum InvoiceAccessLiberationRuleType {
  AfterPayment = 'AFTER_PAYMENT',
  Imediate = 'IMEDIATE'
}

export type InvoiceAccessLogState = {
  __typename?: 'InvoiceAccessLogState';
  invoiceAccess: InvoiceAccess;
};

export type InvoiceAccessOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  liberationRule?: Maybe<OrderByDirection>;
  origin?: Maybe<OrderByDirection>;
  status?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export enum InvoiceAccessOrigin {
  Checkout = 'CHECKOUT',
  Direct = 'DIRECT',
  Invitation = 'INVITATION'
}

export type InvoiceAccessOriginEnumFilterInput = {
  eq?: Maybe<InvoiceAccessOrigin>;
  exists?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<InvoiceAccessOrigin>>;
};

export enum InvoiceAccessStatus {
  Available = 'AVAILABLE',
  Expired = 'EXPIRED',
  Granted = 'GRANTED',
  Suspended = 'SUSPENDED',
  WaitingPayment = 'WAITING_PAYMENT'
}

export type InvoiceAccessStatusEnumFilterInput = {
  eq?: Maybe<InvoiceAccessStatus>;
  exists?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<InvoiceAccessStatus>>;
};

export type InvoiceAccessSummary = {
  __typename?: 'InvoiceAccessSummary';
  /** The amount of accesses by product price */
  count: Scalars['Int'];
  invoiceAccess: InvoiceAccess;
};

export type InvoiceAccessWhereInput = {
  and?: Maybe<Array<InvoiceAccessWhereInput>>;
  createdAt?: Maybe<DateFilterInput>;
  liberationRule?: Maybe<InvoiceAccessLiberationRuleEnumFilterInput>;
  or?: Maybe<Array<InvoiceAccessWhereInput>>;
  origin?: Maybe<InvoiceAccessOriginEnumFilterInput>;
  status?: Maybe<InvoiceAccessStatusEnumFilterInput>;
  updatedAt?: Maybe<DateFilterInput>;
};

export type InvoiceDiscount = {
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<AdminUser>;
  createdById?: Maybe<Scalars['String']>;
  type: InvoiceDiscountType;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<AdminUser>;
  updatedById?: Maybe<Scalars['String']>;
};

export type InvoiceDiscountDiscriminatorInput = {
  invoiceManualDiscount?: Maybe<InvoiceManualDiscountInput>;
  invoiceVoucherDiscount?: Maybe<InvoiceVoucherDiscountInput>;
  type: InvoiceDiscountType;
};

export type InvoiceDiscountMethodInput = {
  create?: Maybe<Scalars['Boolean']>;
  /** required on creation */
  creationDiscount?: Maybe<InvoiceDiscountDiscriminatorInput>;
  delete?: Maybe<Scalars['Boolean']>;
  /** optional on creation */
  invoiceDiscountId?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['Boolean']>;
  /** required on update */
  updateDiscount?: Maybe<InvoiceDiscountUpdateDiscriminatorInput>;
};

export enum InvoiceDiscountType {
  Manual = 'MANUAL',
  Voucher = 'VOUCHER'
}

export type InvoiceDiscountUpdateDiscriminatorInput = {
  invoiceManualDiscount?: Maybe<InvoiceManualDiscountUpdateInput>;
  invoiceVoucherDiscount?: Maybe<InvoiceVoucherDiscountUpdateInput>;
  type: InvoiceDiscountType;
};

export type InvoiceItem = {
  quantity: Scalars['Int'];
  type: InvoiceItemType;
};

export type InvoiceItemDiscriminatorInput = {
  inlineInvoiceItem?: Maybe<InlineInvoiceItemInput>;
  productInvoiceItem?: Maybe<ProductInvoiceItemInput>;
  type: InvoiceItemType;
};

export type InvoiceItemStatusEnumFilterInput = {
  eq?: Maybe<InvoiceItemType>;
  exists?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<InvoiceItemType>>;
};

export enum InvoiceItemType {
  Inline = 'INLINE',
  Product = 'PRODUCT'
}

export type InvoiceItemWhereInput = {
  type?: Maybe<InvoiceItemStatusEnumFilterInput>;
};

export type InvoiceLogState = {
  __typename?: 'InvoiceLogState';
  invoice: Invoice;
};

export type InvoiceManualDiscount = EntityCommonFieldsInterface & InvoiceDiscount & {
  __typename?: 'InvoiceManualDiscount';
  _id: Scalars['ObjectId'];
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<AdminUser>;
  createdById?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type: InvoiceDiscountType;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<AdminUser>;
  updatedById?: Maybe<Scalars['String']>;
};

export type InvoiceManualDiscountInput = {
  amount: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  type: InvoiceDiscountType;
};

export type InvoiceManualDiscountUpdateInput = {
  amount?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  type: InvoiceDiscountType;
};

export type InvoiceOrderByInput = {
  _id?: Maybe<OrderByDirection>;
  createdAt?: Maybe<OrderByDirection>;
  currency?: Maybe<OrderByDirection>;
  description?: Maybe<OrderByDirection>;
  itemsAmount?: Maybe<OrderByDirection>;
  paidAmount?: Maybe<OrderByDirection>;
  refundedAmount?: Maybe<OrderByDirection>;
  status?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type InvoicePaymentLink = {
  __typename?: 'InvoicePaymentLink';
  _id: Scalars['ObjectId'];
  accessToken: Scalars['String'];
  amount: Scalars['Int'];
  bankSlip: InvoicePaymentLinkBankSlip;
  createdAt: Scalars['DateTime'];
  createdBy: AdminUser;
  createdById?: Maybe<Scalars['String']>;
  creditCard: InvoicePaymentLinkCreditCard;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<AdminUser>;
  deletedById?: Maybe<Scalars['String']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  invoice?: Maybe<Invoice>;
  invoiceId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  payments: Array<Payment>;
  pix: InvoicePaymentLinkPix;
  status: InvoicePaymentLinkStatus;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<AdminUser>;
  updatedById?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type InvoicePaymentLinkBankSlip = {
  __typename?: 'InvoicePaymentLinkBankSlip';
  enabled?: Maybe<Scalars['Boolean']>;
  expirationRule?: Maybe<InvoicePaymentLinkExpirationRule>;
};

export type InvoicePaymentLinkBankSlipExpirationRuleDiscriminatorInput = {
  daysAfterCreation?: Maybe<InvoicePaymentLinkDaysAfterCreationExpirationRuleInput>;
  specificDate?: Maybe<InvoicePaymentLinkSpecificDateExpirationRuleInput>;
  type: InvoicePaymentLinkExpirationRuleType;
};

export type InvoicePaymentLinkBankSlipInput = {
  enabled?: Maybe<Scalars['Boolean']>;
  expirationRule?: Maybe<InvoicePaymentLinkBankSlipExpirationRuleDiscriminatorInput>;
};

export type InvoicePaymentLinkCreditCard = {
  __typename?: 'InvoicePaymentLinkCreditCard';
  enabled?: Maybe<Scalars['Boolean']>;
  installmentsRule?: Maybe<InvoicePaymentLinkCreditCardInstallmentsRule>;
};

export type InvoicePaymentLinkCreditCardInput = {
  enabled?: Maybe<Scalars['Boolean']>;
  installmentsRule?: Maybe<InvoicePaymentLinkCreditCardInstallmentsRuleDiscriminatorInput>;
};

export enum InvoicePaymentLinkCreditCardInstallmentRuleType {
  SpecificInstallments = 'SPECIFIC_INSTALLMENTS',
  UpTo = 'UP_TO'
}

export type InvoicePaymentLinkCreditCardInstallmentsRule = {
  type: InvoicePaymentLinkCreditCardInstallmentRuleType;
};

export type InvoicePaymentLinkCreditCardInstallmentsRuleDiscriminatorInput = {
  specificInstallments?: Maybe<InvoicePaymentLinkCreditCardSpecificInstallmentsInstallmentsRuleInput>;
  type: InvoicePaymentLinkCreditCardInstallmentRuleType;
  upTo?: Maybe<InvoicePaymentLinkCreditCardUpToInstallmentsRuleInput>;
};

export type InvoicePaymentLinkCreditCardSpecificInstallmentsInstallmentsRule = InvoicePaymentLinkCreditCardInstallmentsRule & {
  __typename?: 'InvoicePaymentLinkCreditCardSpecificInstallmentsInstallmentsRule';
  installments: Array<Scalars['Int']>;
  type: InvoicePaymentLinkCreditCardInstallmentRuleType;
};

export type InvoicePaymentLinkCreditCardSpecificInstallmentsInstallmentsRuleInput = {
  installments: Array<Scalars['Int']>;
  type?: Maybe<InvoicePaymentLinkCreditCardInstallmentRuleType>;
};

export type InvoicePaymentLinkCreditCardUpToInstallmentsRule = InvoicePaymentLinkCreditCardInstallmentsRule & {
  __typename?: 'InvoicePaymentLinkCreditCardUpToInstallmentsRule';
  type: InvoicePaymentLinkCreditCardInstallmentRuleType;
  upTo: Scalars['Int'];
};

export type InvoicePaymentLinkCreditCardUpToInstallmentsRuleInput = {
  type?: Maybe<InvoicePaymentLinkCreditCardInstallmentRuleType>;
  upTo: Scalars['Int'];
};

export type InvoicePaymentLinkDaysAfterCreationExpirationRule = InvoicePaymentLinkExpirationRule & {
  __typename?: 'InvoicePaymentLinkDaysAfterCreationExpirationRule';
  days: Scalars['Int'];
  type: InvoicePaymentLinkExpirationRuleType;
};

export type InvoicePaymentLinkDaysAfterCreationExpirationRuleInput = {
  days: Scalars['Int'];
  type?: Maybe<InvoicePaymentLinkExpirationRuleType>;
};

export type InvoicePaymentLinkExpirationRule = {
  type: InvoicePaymentLinkExpirationRuleType;
};

export enum InvoicePaymentLinkExpirationRuleType {
  DaysAfterCreation = 'DAYS_AFTER_CREATION',
  MinutesAfterCreation = 'MINUTES_AFTER_CREATION',
  SpecificDate = 'SPECIFIC_DATE'
}

export type InvoicePaymentLinkLogState = {
  __typename?: 'InvoicePaymentLinkLogState';
  invoicePaymentLink: InvoicePaymentLink;
};

export type InvoicePaymentLinkMinutesAfterCreationExpirationRule = InvoicePaymentLinkExpirationRule & {
  __typename?: 'InvoicePaymentLinkMinutesAfterCreationExpirationRule';
  minutes: Scalars['Int'];
  type: InvoicePaymentLinkExpirationRuleType;
};

export type InvoicePaymentLinkMinutesAfterCreationExpirationRuleInput = {
  minutes: Scalars['Int'];
  type?: Maybe<InvoicePaymentLinkExpirationRuleType>;
};

export type InvoicePaymentLinkOrderByInput = {
  amount?: Maybe<OrderByDirection>;
  createdAt?: Maybe<OrderByDirection>;
  deletedAt?: Maybe<OrderByDirection>;
  expirationDate?: Maybe<OrderByDirection>;
  status?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type InvoicePaymentLinkPix = {
  __typename?: 'InvoicePaymentLinkPix';
  enabled?: Maybe<Scalars['Boolean']>;
  expirationRule?: Maybe<InvoicePaymentLinkExpirationRule>;
};

export type InvoicePaymentLinkPixExpirationRuleDiscriminatorInput = {
  daysAfterCreation?: Maybe<InvoicePaymentLinkDaysAfterCreationExpirationRuleInput>;
  minutesAfterCreation?: Maybe<InvoicePaymentLinkMinutesAfterCreationExpirationRuleInput>;
  specificDate?: Maybe<InvoicePaymentLinkSpecificDateExpirationRuleInput>;
  type: InvoicePaymentLinkExpirationRuleType;
};

export type InvoicePaymentLinkPixInput = {
  enabled?: Maybe<Scalars['Boolean']>;
  expirationRule?: Maybe<InvoicePaymentLinkPixExpirationRuleDiscriminatorInput>;
};

export type InvoicePaymentLinkSpecificDateExpirationRule = InvoicePaymentLinkExpirationRule & {
  __typename?: 'InvoicePaymentLinkSpecificDateExpirationRule';
  date: Scalars['DateTime'];
  type: InvoicePaymentLinkExpirationRuleType;
};

export type InvoicePaymentLinkSpecificDateExpirationRuleInput = {
  date: Scalars['DateTime'];
  type?: Maybe<InvoicePaymentLinkExpirationRuleType>;
};

export enum InvoicePaymentLinkStatus {
  Canceled = 'CANCELED',
  Expired = 'EXPIRED',
  Paid = 'PAID',
  PaymentGenerated = 'PAYMENT_GENERATED',
  Pending = 'PENDING'
}

export type InvoicePaymentLinkStatusEnumFilterInput = {
  eq?: Maybe<InvoicePaymentLinkStatus>;
  exists?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<InvoicePaymentLinkStatus>>;
};

export type InvoicePaymentLinkWhereInput = {
  amount?: Maybe<NumberFilterInput>;
  and?: Maybe<Array<InvoicePaymentLinkWhereInput>>;
  createdAt?: Maybe<DateFilterInput>;
  expirationDate?: Maybe<DateFilterInput>;
  or?: Maybe<Array<InvoicePaymentLinkWhereInput>>;
  status?: Maybe<InvoicePaymentLinkStatusEnumFilterInput>;
  updatedAt?: Maybe<DateFilterInput>;
};

export enum InvoiceStatus {
  Draft = 'DRAFT',
  Expired = 'EXPIRED',
  Late = 'LATE',
  Open = 'OPEN',
  Paid = 'PAID',
  PartiallyPaid = 'PARTIALLY_PAID',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  Refunded = 'REFUNDED',
  Void = 'VOID'
}

export type InvoiceStatusEnumFilterInput = {
  eq?: Maybe<InvoiceStatus>;
  exists?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<InvoiceStatus>>;
};

export type InvoiceVoucherDiscount = EntityCommonFieldsInterface & InvoiceDiscount & {
  __typename?: 'InvoiceVoucherDiscount';
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<AdminUser>;
  createdById?: Maybe<Scalars['String']>;
  type: InvoiceDiscountType;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<AdminUser>;
  updatedById?: Maybe<Scalars['String']>;
};

export type InvoiceVoucherDiscountInput = {
  type: InvoiceDiscountType;
};

export type InvoiceVoucherDiscountUpdateInput = {
  type: InvoiceDiscountType;
};

export type InvoiceWhereInput = {
  _id?: Maybe<ObjectIdFilterInput>;
  and?: Maybe<Array<InvoiceWhereInput>>;
  createdAt?: Maybe<DateFilterInput>;
  currency?: Maybe<CurrencyEnumFilterInput>;
  description?: Maybe<StringFilterInput>;
  items?: Maybe<InvoiceItemWhereInput>;
  itemsAmount?: Maybe<NumberFilterInput>;
  or?: Maybe<Array<InvoiceWhereInput>>;
  paidAmount?: Maybe<NumberFilterInput>;
  refundedAmount?: Maybe<NumberFilterInput>;
  status?: Maybe<InvoiceStatusEnumFilterInput>;
  updatedAt?: Maybe<DateFilterInput>;
};

export enum LegalPersonType {
  Company = 'COMPANY',
  GovernmentEntity = 'GOVERNMENT_ENTITY',
  Individual = 'INDIVIDUAL',
  NonProfit = 'NON_PROFIT'
}

export type Lesson = {
  __typename?: 'Lesson';
  _id: Scalars['ObjectId'];
  blockEndsAt?: Maybe<Scalars['DateTime']>;
  blockReason?: Maybe<LessonBlockReason>;
  blockStartedAt?: Maybe<Scalars['DateTime']>;
  blockStartsAt?: Maybe<Scalars['DateTime']>;
  blockType?: Maybe<LessonBlockType>;
  completionRequired: Scalars['Boolean'];
  contentBlocks?: Maybe<Array<ContentBlock>>;
  course: Course;
  courseId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdBy: User;
  createdById: Scalars['String'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  expirationRule?: Maybe<DateConstraint>;
  icon?: Maybe<Scalars['String']>;
  liberationRule?: Maybe<Constraint>;
  mediaTime?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  organization: Organization;
  organizationId: Scalars['String'];
  rating: LessonRating;
  readingTime?: Maybe<Scalars['Float']>;
  status: LessonStatus;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
  usedBy: Array<Scalars['String']>;
};

export type LessonBlockReason = {
  __typename?: 'LessonBlockReason';
  chapterIds?: Maybe<Array<Scalars['String']>>;
  chapters?: Maybe<Array<Chapter>>;
  lessonIds?: Maybe<Array<Scalars['String']>>;
  lessons?: Maybe<Array<Lesson>>;
};

export enum LessonBlockType {
  ExpirationDaysAfterCourseStart = 'EXPIRATION_DAYS_AFTER_COURSE_START',
  ExpirationDaysAfterEnrolment = 'EXPIRATION_DAYS_AFTER_ENROLMENT',
  ExpirationFixedDate = 'EXPIRATION_FIXED_DATE',
  LiberationAfterCompletion = 'LIBERATION_AFTER_COMPLETION',
  LiberationDaysAfterCourseStart = 'LIBERATION_DAYS_AFTER_COURSE_START',
  LiberationDaysAfterEnrolment = 'LIBERATION_DAYS_AFTER_ENROLMENT',
  LiberationFixedDate = 'LIBERATION_FIXED_DATE'
}

export type LessonLiberationRuleInput = {
  dateConstraint?: Maybe<DateConstraintInput>;
  progressConstraint?: Maybe<ProgressConstraintInput>;
};

export type LessonOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  name?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type LessonRating = {
  __typename?: 'LessonRating';
  average: Scalars['Float'];
  count: Scalars['Float'];
};

export enum LessonStatus {
  Blocked = 'BLOCKED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type LessonTemplate = {
  __typename?: 'LessonTemplate';
  _id: Scalars['ObjectId'];
  contentBlocks?: Maybe<Array<ContentBlock>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  thumb: FilestackS3File;
  thumbId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Log = {
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type LogOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export enum LogSource {
  AdminAttachPaymentScheduleToInvoice = 'ADMIN_ATTACH_PAYMENT_SCHEDULE_TO_INVOICE',
  AdminAttachPaymentToInvoice = 'ADMIN_ATTACH_PAYMENT_TO_INVOICE',
  AdminCancelInvoicePaymentLink = 'ADMIN_CANCEL_INVOICE_PAYMENT_LINK',
  AdminCancelPayment = 'ADMIN_CANCEL_PAYMENT',
  AdminCancelPaymentSchedule = 'ADMIN_CANCEL_PAYMENT_SCHEDULE',
  AdminCreateCheckout = 'ADMIN_CREATE_CHECKOUT',
  AdminDetachPaymentFromInvoice = 'ADMIN_DETACH_PAYMENT_FROM_INVOICE',
  AdminDetachPaymentScheduleFromInvoice = 'ADMIN_DETACH_PAYMENT_SCHEDULE_FROM_INVOICE',
  AdminGeneratePaymentSchedules = 'ADMIN_GENERATE_PAYMENT_SCHEDULES',
  AdminRefundPayment = 'ADMIN_REFUND_PAYMENT',
  AdminRetryPaymentSchedule = 'ADMIN_RETRY_PAYMENT_SCHEDULE',
  AdminUpdateCheckout = 'ADMIN_UPDATE_CHECKOUT',
  AdminUpdatePayment = 'ADMIN_UPDATE_PAYMENT',
  AdminUpdatePaymentSchedule = 'ADMIN_UPDATE_PAYMENT_SCHEDULE',
  AdminUpdateUserPaymentProfile = 'ADMIN_UPDATE_USER_PAYMENT_PROFILE',
  CreateCheckoutInvoiceAccessesJob = 'CREATE_CHECKOUT_INVOICE_ACCESSES_JOB',
  CreateScheduledPaymentsJob = 'CREATE_SCHEDULED_PAYMENTS_JOB',
  ProcessCheckoutPaymentJob = 'PROCESS_CHECKOUT_PAYMENT_JOB',
  PublicCancelCheckoutPayment = 'PUBLIC_CANCEL_CHECKOUT_PAYMENT',
  PublicCancelInvoicePaymentLinkPayment = 'PUBLIC_CANCEL_INVOICE_PAYMENT_LINK_PAYMENT',
  PublicCreateCheckoutPayment = 'PUBLIC_CREATE_CHECKOUT_PAYMENT',
  SyncExpiredCheckoutsJob = 'SYNC_EXPIRED_CHECKOUTS_JOB',
  SyncExpiredPaymentsJob = 'SYNC_EXPIRED_PAYMENTS_JOB',
  SyncPagarmePaymentJob = 'SYNC_PAGARME_PAYMENT_JOB'
}

export type LogTarget = {
  __typename?: 'LogTarget';
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  reference: Scalars['String'];
  role: LogTargetRole;
  type: LogTargetType;
  updatedAt: Scalars['DateTime'];
};

export enum LogTargetRole {
  Actor = 'ACTOR',
  Related = 'RELATED',
  Subject = 'SUBJECT'
}

export enum LogTargetType {
  Anticipation = 'ANTICIPATION',
  Bank = 'BANK',
  BankAccount = 'BANK_ACCOUNT',
  Card = 'CARD',
  Certificate = 'CERTIFICATE',
  CertificateTemplate = 'CERTIFICATE_TEMPLATE',
  Chapter = 'CHAPTER',
  Checkout = 'CHECKOUT',
  Course = 'COURSE',
  Dispute = 'DISPUTE',
  Enrolment = 'ENROLMENT',
  File = 'FILE',
  Import = 'IMPORT',
  Invoice = 'INVOICE',
  InvoiceAccess = 'INVOICE_ACCESS',
  InvoicePaymentLink = 'INVOICE_PAYMENT_LINK',
  Lesson = 'LESSON',
  LessonTemplate = 'LESSON_TEMPLATE',
  Log = 'LOG',
  Member = 'MEMBER',
  Organization = 'ORGANIZATION',
  Payment = 'PAYMENT',
  PaymentSchedule = 'PAYMENT_SCHEDULE',
  PlanConfig = 'PLAN_CONFIG',
  Policy = 'POLICY',
  Product = 'PRODUCT',
  Purchase = 'PURCHASE',
  Questionnaire = 'QUESTIONNAIRE',
  Recipient = 'RECIPIENT',
  Refund = 'REFUND',
  Report = 'REPORT',
  Room = 'ROOM',
  SplitConfig = 'SPLIT_CONFIG',
  User = 'USER',
  UserPaymentProfile = 'USER_PAYMENT_PROFILE',
  UserQuestionnaireAnswer = 'USER_QUESTIONNAIRE_ANSWER',
  Withdrawal = 'WITHDRAWAL'
}

export enum LogType {
  AddInvoiceDiscount = 'ADD_INVOICE_DISCOUNT',
  AddProductPrice = 'ADD_PRODUCT_PRICE',
  ArchiveProductPrice = 'ARCHIVE_PRODUCT_PRICE',
  AttachPaymentScheduleToInvoice = 'ATTACH_PAYMENT_SCHEDULE_TO_INVOICE',
  AttachPaymentToInvoice = 'ATTACH_PAYMENT_TO_INVOICE',
  CancelAnticipation = 'CANCEL_ANTICIPATION',
  CancelInvoicePaymentLink = 'CANCEL_INVOICE_PAYMENT_LINK',
  CancelWithdrawal = 'CANCEL_WITHDRAWAL',
  CopyCertificateTemplate = 'COPY_CERTIFICATE_TEMPLATE',
  CreateAnticipation = 'CREATE_ANTICIPATION',
  CreateBankAccount = 'CREATE_BANK_ACCOUNT',
  CreateCard = 'CREATE_CARD',
  CreateCertificate = 'CREATE_CERTIFICATE',
  CreateCertificateTemplateFromCopy = 'CREATE_CERTIFICATE_TEMPLATE_FROM_COPY',
  CreateCheckout = 'CREATE_CHECKOUT',
  CreateImport = 'CREATE_IMPORT',
  CreateInvoice = 'CREATE_INVOICE',
  CreateInvoiceAccess = 'CREATE_INVOICE_ACCESS',
  CreateInvoicePaymentLink = 'CREATE_INVOICE_PAYMENT_LINK',
  CreateMember = 'CREATE_MEMBER',
  CreatePayment = 'CREATE_PAYMENT',
  CreatePaymentSchedule = 'CREATE_PAYMENT_SCHEDULE',
  CreatePlanConfig = 'CREATE_PLAN_CONFIG',
  CreatePolicy = 'CREATE_POLICY',
  CreateProduct = 'CREATE_PRODUCT',
  CreatePurchase = 'CREATE_PURCHASE',
  CreateRecipient = 'CREATE_RECIPIENT',
  CreateRefund = 'CREATE_REFUND',
  CreateSplitConfig = 'CREATE_SPLIT_CONFIG',
  CreateUserPaymentProfile = 'CREATE_USER_PAYMENT_PROFILE',
  CreateWithdrawal = 'CREATE_WITHDRAWAL',
  DeleteBankAccount = 'DELETE_BANK_ACCOUNT',
  DeleteCard = 'DELETE_CARD',
  DeleteCertificate = 'DELETE_CERTIFICATE',
  DeleteInvoiceDiscount = 'DELETE_INVOICE_DISCOUNT',
  DeleteInvoicePaymentLink = 'DELETE_INVOICE_PAYMENT_LINK',
  DeleteMember = 'DELETE_MEMBER',
  DeletePolicy = 'DELETE_POLICY',
  DeleteProduct = 'DELETE_PRODUCT',
  DeleteProductPrice = 'DELETE_PRODUCT_PRICE',
  DeleteSplitConfig = 'DELETE_SPLIT_CONFIG',
  DeleteUserPaymentProfile = 'DELETE_USER_PAYMENT_PROFILE',
  DetachPaymentFromInvoice = 'DETACH_PAYMENT_FROM_INVOICE',
  DetachPaymentScheduleFromInvoice = 'DETACH_PAYMENT_SCHEDULE_FROM_INVOICE',
  UnarchiveProductPrice = 'UNARCHIVE_PRODUCT_PRICE',
  UpdateAnticipationStatus = 'UPDATE_ANTICIPATION_STATUS',
  UpdateBankAccount = 'UPDATE_BANK_ACCOUNT',
  UpdateCertificate = 'UPDATE_CERTIFICATE',
  UpdateCheckout = 'UPDATE_CHECKOUT',
  UpdateImport = 'UPDATE_IMPORT',
  UpdateInvoice = 'UPDATE_INVOICE',
  UpdateInvoiceAccess = 'UPDATE_INVOICE_ACCESS',
  UpdateInvoiceDiscount = 'UPDATE_INVOICE_DISCOUNT',
  UpdateInvoicePaymentLink = 'UPDATE_INVOICE_PAYMENT_LINK',
  UpdateMember = 'UPDATE_MEMBER',
  UpdatePayment = 'UPDATE_PAYMENT',
  UpdatePaymentSchedule = 'UPDATE_PAYMENT_SCHEDULE',
  UpdatePlanConfig = 'UPDATE_PLAN_CONFIG',
  UpdatePolicy = 'UPDATE_POLICY',
  UpdateProduct = 'UPDATE_PRODUCT',
  UpdateProductPrice = 'UPDATE_PRODUCT_PRICE',
  UpdatePurchase = 'UPDATE_PURCHASE',
  UpdateRecipient = 'UPDATE_RECIPIENT',
  UpdateRefund = 'UPDATE_REFUND',
  UpdateUserPaymentProfile = 'UPDATE_USER_PAYMENT_PROFILE',
  UpdateWithdrawalStatus = 'UPDATE_WITHDRAWAL_STATUS'
}

export type LogWhereInput = {
  reference?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<LogTargetRole>>;
  type?: Maybe<LogTargetType>;
};

export type MagicToken = {
  __typename?: 'MagicToken';
  _id: Scalars['ObjectId'];
  active: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  createdBy: User;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  userId: Scalars['ObjectId'];
};

export type Member = {
  __typename?: 'Member';
  _id: Scalars['ObjectId'];
  adminUserId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  logs: Array<Log>;
  organization: Organization;
  organizationId: Scalars['String'];
  policies: Array<Policy>;
  updatedAt: Scalars['DateTime'];
  user: User;
};


export type MemberLogsArgs = {
  roles?: Maybe<Array<LogTargetRole>>;
};

export type MemberLogState = {
  __typename?: 'MemberLogState';
  member: Member;
};

export type MemberOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type Metadata = {
  __typename?: 'Metadata';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type MetadataInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type MoneyPayment = EntityCommonFieldsInterface & Payment & {
  __typename?: 'MoneyPayment';
  _id: Scalars['ObjectId'];
  amount: Scalars['Int'];
  checkout?: Maybe<Checkout>;
  checkoutId?: Maybe<Scalars['String']>;
  checkoutSharedId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  currency?: Maybe<Currency>;
  description?: Maybe<Scalars['String']>;
  failCode?: Maybe<Scalars['String']>;
  failMessage?: Maybe<Scalars['String']>;
  hasGeneratingSharedPaymentSchedules: Scalars['Boolean'];
  invoice?: Maybe<Invoice>;
  invoiceId?: Maybe<Scalars['String']>;
  invoicePaymentLink?: Maybe<InvoicePaymentLink>;
  invoicePaymentLinkId?: Maybe<Scalars['String']>;
  modality: PaymentModality;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  pagarmeExternalId?: Maybe<Scalars['String']>;
  paymentMethod: PaymentMethod;
  paymentSchedule?: Maybe<PaymentSchedule>;
  paymentScheduleId?: Maybe<Scalars['String']>;
  paymentScheduleSharedId?: Maybe<Scalars['String']>;
  planConfig?: Maybe<PlanConfig>;
  planConfigId?: Maybe<Scalars['String']>;
  planConfigSharedId: Scalars['String'];
  purchase?: Maybe<Purchase>;
  purchaseId?: Maybe<Scalars['String']>;
  refundedAmount?: Maybe<Scalars['Float']>;
  refunds: Array<Refund>;
  scheduleInstallment?: Maybe<Scalars['Int']>;
  scheduleTotalAmount?: Maybe<Scalars['Int']>;
  scheduleTotalInstallments?: Maybe<Scalars['Int']>;
  splitConfig?: Maybe<SplitConfig>;
  splitConfigId?: Maybe<Scalars['String']>;
  status?: Maybe<PaymentStatus>;
  statusAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
  userPaymentProfile?: Maybe<UserPaymentProfile>;
  userPaymentProfileId?: Maybe<Scalars['String']>;
  userPaymentProfileSharedId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  adminAddInvoiceDiscount: Invoice;
  adminAddProductPrice: Product;
  adminArchiveProduct: Product;
  adminArchiveProductPrice: Product;
  adminAttachPaymentScheduleToInvoice: PaymentScheduleInvoiceResponse;
  adminAttachPaymentToInvoice: PaymentInvoiceResponse;
  adminAttachUserToInvoiceAccess: InvoiceAccess;
  adminAttachUserToInvoiceAccesses: AttachUserToInvoiceAccessesResponse;
  adminCancelAnticipation: Anticipation;
  adminCancelInvoiceAccessInvitation: InvoiceAccess;
  adminCancelInvoicePaymentLink: InvoicePaymentLink;
  adminCancelPayment: Payment;
  /** The canceled payment schedule(s). */
  adminCancelPaymentSchedule: Array<PaymentSchedule>;
  /** Only pending bank slip refunds can be canceled. */
  adminCancelRefund: Refund;
  adminCancelWithdrawal: Withdrawal;
  adminChangeEmail: StudentUser;
  adminChangePassword: StudentUser;
  adminCommunicateStudentCertificateEmitted: Certificate;
  adminCopyCertificateTemplate: CopyCertificateTemplateResponse;
  adminCreateAccessProduct: AccessProduct;
  adminCreateAnticipation: Anticipation;
  adminCreateCertificate: Certificate;
  adminCreateCertificateTemplate: CertificateTemplate;
  adminCreateChapter: Chapter;
  adminCreateCheckout: Checkout;
  adminCreateCourse: AdminCreateCourseResponse;
  adminCreateEnrolment: Enrolment;
  adminCreateFilestackS3File: FilestackS3File;
  /** Emits multiple certificates from a filled template excel file. */
  adminCreateImportCertificatesV1: ImportCertificate;
  adminCreateInvoice: Invoice;
  adminCreateInvoicePaymentLink: InvoicePaymentLink;
  adminCreateLesson: Lesson;
  adminCreateLessonTemplate: LessonTemplate;
  adminCreateMember: Member;
  adminCreateOrganization: Organization;
  adminCreateOtherProduct: OtherProduct;
  adminCreatePayment: Payment;
  adminCreatePlanConfig: PlanConfig;
  adminCreatePolicy: Policy;
  adminCreateQuestionnaireExam: QuestionnaireExam;
  adminCreateQuestionnaireQuiz: QuestionnaireQuiz;
  adminCreateQuestionnaireSurvey: QuestionnaireSurvey;
  adminCreateRecipient: Recipient;
  adminCreateRecipientBankAccount: BankAccount;
  adminCreateReportQuestionnaireAnswersV1: QuestionnaireAnswersV1Report;
  adminCreateReportUsersProgressV1: UsersProgressV1Report;
  adminCreateRoom: Room;
  adminCreateSplitConfig: SplitConfig;
  adminCreateStudentUser: AdminCreateStudentResponse;
  adminCreateUserCard: Card;
  adminCreateUserCardWPagarmeExternalId: Card;
  adminCreateUserPaymentProfile: UserPaymentProfile;
  adminCreateWithdrawal: Withdrawal;
  adminDeleteCertificate: Certificate;
  adminDeleteCertificateTemplate: CertificateTemplate;
  adminDeleteChapter: Chapter;
  adminDeleteCourse: Course;
  adminDeleteEnrolment: Enrolment;
  adminDeleteInvoiceDiscount: Invoice;
  adminDeleteInvoicePaymentLink: InvoicePaymentLink;
  adminDeleteLesson: Lesson;
  adminDeleteMember: Member;
  adminDeletePolicy: Policy;
  adminDeleteProduct: Product;
  adminDeleteProductPrice: Product;
  adminDeleteQuestionnaire: Questionnaire;
  adminDeleteRecipientBankAccount: BankAccount;
  adminDeleteStudentUser: StudentUser;
  adminDeleteUserCard: Card;
  adminDeleteUserPaymentProfile: UserPaymentProfile;
  adminDetachPaymentFromInvoice: PaymentInvoiceResponse;
  adminDetachPaymentScheduleFromInvoice: PaymentSchedule;
  adminDetachUserFromInvoiceAccess: InvoiceAccess;
  adminDuplicatePayment: Payment;
  adminGenerateCertificateTemplatePreview: GenerateCertificateTemplatePreviewResponse;
  adminGenerateInvoiceAccessInvitation: InvoiceAccess;
  adminGenerateMultiCertificateBaseExcel: GenerateExcelResponse;
  adminGeneratePaymentSchedules: GeneratePaymentSchedulesResponse;
  adminGenerateStudentMagicToken: AdminGenerateStudentMagicTokenResponse;
  adminGrantInvoiceAccess: InvoiceAccess;
  adminRefundPayment: RefundPaymentResponse;
  adminResetPassword: AdminUser;
  adminRetryPaymentSchedule: RetryPaymentScheduleResponse;
  adminSendResetPasswordToken: AdminSendResetPasswordTokenResponse;
  adminSimulateAnticipation: SimulateAnticipationResponse;
  adminSuspendInvoiceAccess: InvoiceAccess;
  adminSyncPayment: Payment;
  adminUnarchiveProduct: Product;
  adminUnarchiveProductPrice: Product;
  adminUpdateAccessProduct: AccessProduct;
  adminUpdateCertificate: Certificate;
  adminUpdateCertificateTemplate: CertificateTemplate;
  adminUpdateChapter: Chapter;
  adminUpdateCheckout: Checkout;
  adminUpdateCourse: Course;
  adminUpdateFile: FilestackS3File;
  adminUpdateInvoice: Invoice;
  adminUpdateInvoiceAccess: InvoiceAccess;
  adminUpdateInvoicePaymentLink: InvoicePaymentLink;
  adminUpdateLesson: Lesson;
  adminUpdateMember: Member;
  adminUpdateOrganization: Organization;
  adminUpdateOtherProduct: OtherProduct;
  adminUpdatePayment: Payment;
  adminUpdatePaymentSchedule: Array<PaymentSchedule>;
  adminUpdatePlanConfig: PlanConfig;
  adminUpdatePolicy: Policy;
  adminUpdateProductPrice: Product;
  adminUpdateProfile: AdminUser;
  adminUpdateQuestionnaireExam: QuestionnaireExam;
  adminUpdateQuestionnaireQuiz: QuestionnaireQuiz;
  adminUpdateQuestionnaireSurvey: QuestionnaireSurvey;
  adminUpdateRecipient: Recipient;
  adminUpdateRecipientBankAccount: BankAccount;
  adminUpdateRoom: Room;
  adminUpdateStudentUser: StudentUser;
  adminUpdateUserPaymentProfile: UserPaymentProfile;
  adminUserGetHubspotToken?: Maybe<Scalars['String']>;
  adminUserSignIn: AdminUserAuthResponse;
  adminUserSignUp: AdminUserAuthResponse;
  authenticateMagicToken: StudentUserAuthResponse;
  logOut: Session;
  publicCancelCheckoutPayment?: Maybe<Payment>;
  publicCancelInvoicePaymentLinkPayment: PublicCancelInvoicePaymentLinkPaymentResponse;
  publicCreateCheckoutPayment: PublicCreateCheckoutPaymentResponse;
  publicCreatePaymentFromInvoicePaymentLink: PublicCreatePaymentFromInvoicePaymentLinkResponse;
  studentChangeEmail: StudentUser;
  studentChangePassword: StudentUser;
  studentCreateCertificate: Certificate;
  studentCreateUserCard: Card;
  studentCreateUserPaymentProfile: UserPaymentProfile;
  studentDefinePassword: StudentUser;
  studentDeleteUserPaymentProfile: UserPaymentProfile;
  studentResetPassword: StudentUser;
  studentSendResetPasswordToken: StudentSendResetPasswordTokenResponse;
  studentUpdateCourseState: UserCourseState;
  studentUpdateProfile: StudentUser;
  studentUpdateProgress: UserProgress;
  studentUpdateUserPaymentProfile: UserPaymentProfile;
  studentUpsertQuestionnaireAnswer: UserQuestionnaireAnswer;
  studentUserSignIn: StudentUserAuthResponse;
  studentUserSignUp: StudentUserAuthResponse;
  studentUsesInvoiceAccessInvitation: InvoiceAccess;
};


export type MutationAdminAddInvoiceDiscountArgs = {
  discount: InvoiceDiscountDiscriminatorInput;
  invoiceId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminAddProductPriceArgs = {
  organizationId: Scalars['String'];
  price: ProductPriceInput;
  productId: Scalars['String'];
};


export type MutationAdminArchiveProductArgs = {
  organizationId: Scalars['String'];
  productId: Scalars['String'];
};


export type MutationAdminArchiveProductPriceArgs = {
  organizationId: Scalars['String'];
  productId: Scalars['String'];
  productPriceId: Scalars['String'];
};


export type MutationAdminAttachPaymentScheduleToInvoiceArgs = {
  invoiceId: Scalars['String'];
  organizationId: Scalars['String'];
  paymentScheduleId?: Maybe<Scalars['String']>;
  paymentScheduleSharedId?: Maybe<Scalars['String']>;
};


export type MutationAdminAttachPaymentToInvoiceArgs = {
  invoiceId: Scalars['String'];
  organizationId: Scalars['String'];
  paymentId: Scalars['String'];
};


export type MutationAdminAttachUserToInvoiceAccessArgs = {
  invoiceAccessId: Scalars['String'];
  liberationRule: InvoiceAccessLiberationRuleType;
  organizationId: Scalars['String'];
  studentUserId: Scalars['String'];
};


export type MutationAdminAttachUserToInvoiceAccessesArgs = {
  invoiceAccessIds: Array<Scalars['String']>;
  invoiceId: Scalars['String'];
  liberationRule: InvoiceAccessLiberationRuleType;
  organizationId: Scalars['String'];
  studentUserId: Scalars['String'];
};


export type MutationAdminCancelAnticipationArgs = {
  anticipationId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminCancelInvoiceAccessInvitationArgs = {
  invoiceAccessId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminCancelInvoicePaymentLinkArgs = {
  invoicePaymentLinkId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminCancelPaymentArgs = {
  organizationId: Scalars['String'];
  paymentId: Scalars['String'];
};


export type MutationAdminCancelPaymentScheduleArgs = {
  organizationId: Scalars['String'];
  paymentScheduleId?: Maybe<Scalars['String']>;
  paymentScheduleSharedId?: Maybe<Scalars['String']>;
};


export type MutationAdminCancelRefundArgs = {
  organizationId: Scalars['String'];
  refundId: Scalars['String'];
};


export type MutationAdminCancelWithdrawalArgs = {
  organizationId: Scalars['String'];
  withdrawalId: Scalars['String'];
};


export type MutationAdminChangeEmailArgs = {
  email: Scalars['String'];
};


export type MutationAdminChangePasswordArgs = {
  newPassword: Scalars['String'];
  password: Scalars['String'];
};


export type MutationAdminCommunicateStudentCertificateEmittedArgs = {
  certificateId?: Maybe<Scalars['String']>;
  certificateSharedId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
};


export type MutationAdminCopyCertificateTemplateArgs = {
  certificateTemplateId: Scalars['String'];
  name: Scalars['String'];
  organizationId: Scalars['String'];
  targetOrganizationId?: Maybe<Scalars['String']>;
};


export type MutationAdminCreateAccessProductArgs = {
  accessExpirationRule?: Maybe<AccessExpirationRuleDiscriminatorInput>;
  accesses: Array<ProductAccessDiscriminatorInput>;
  description?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataInput>>;
  name: Scalars['String'];
  organizationId: Scalars['String'];
  prices: Array<ProductPriceInput>;
  unitLabel?: Maybe<Scalars['String']>;
};


export type MutationAdminCreateAnticipationArgs = {
  amount: Scalars['Int'];
  currency: Currency;
  description?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  paymentDate?: Maybe<Scalars['DateTime']>;
  recipientId: Scalars['String'];
  timeframe: AnticipationTimeframe;
};


export type MutationAdminCreateCertificateArgs = {
  certificateTemplateId: Scalars['String'];
  courseId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  payload: CertificatePayloadInput;
  roomId?: Maybe<Scalars['String']>;
  studentUserId: Scalars['String'];
  suppressCommunication?: Maybe<Scalars['Boolean']>;
};


export type MutationAdminCreateCertificateTemplateArgs = {
  name: Scalars['String'];
  organizationId: Scalars['String'];
  pages: Array<CertificateTemplatePageInput>;
};


export type MutationAdminCreateChapterArgs = {
  courseId: Scalars['String'];
  name: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminCreateCheckoutArgs = {
  currency: Currency;
  description?: Maybe<Scalars['String']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  invoiceDiscounts?: Maybe<Array<InvoiceDiscountDiscriminatorInput>>;
  invoiceItems: Array<InvoiceItemDiscriminatorInput>;
  organizationId: Scalars['String'];
  paymentMethodsConfig: CheckoutPaymentMethodsConfigInput;
  splitConfigId: Scalars['String'];
};


export type MutationAdminCreateCourseArgs = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  organizationId: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};


export type MutationAdminCreateEnrolmentArgs = {
  courseId: Scalars['String'];
  organizationId: Scalars['String'];
  roomId: Scalars['String'];
  studentUserId: Scalars['String'];
};


export type MutationAdminCreateFilestackS3FileArgs = {
  acl: FileAcl;
  container: Scalars['String'];
  contentType: Scalars['String'];
  handle: Scalars['String'];
  key: Scalars['String'];
  organizationId: Scalars['String'];
  originalName: Scalars['String'];
  originalPath: Scalars['String'];
  size: Scalars['Float'];
  source: Scalars['String'];
  uploadId: Scalars['String'];
  url: Scalars['String'];
};


export type MutationAdminCreateImportCertificatesV1Args = {
  certificateTemplateId: Scalars['String'];
  courseId?: Maybe<Scalars['String']>;
  excelFileId: Scalars['String'];
  organizationId: Scalars['String'];
  roomId?: Maybe<Scalars['String']>;
  suppressCommunication?: Maybe<Scalars['Boolean']>;
};


export type MutationAdminCreateInvoiceArgs = {
  currency: Currency;
  description?: Maybe<Scalars['String']>;
  discounts?: Maybe<Array<InvoiceDiscountDiscriminatorInput>>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  items: Array<InvoiceItemDiscriminatorInput>;
  organizationId: Scalars['String'];
  splitConfigId: Scalars['String'];
  studentUserId: Scalars['String'];
  userPaymentProfileId: Scalars['String'];
};


export type MutationAdminCreateInvoicePaymentLinkArgs = {
  amount: Scalars['Int'];
  bankSlip?: Maybe<InvoicePaymentLinkBankSlipInput>;
  creditCard?: Maybe<InvoicePaymentLinkCreditCardInput>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  invoiceId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  pix?: Maybe<InvoicePaymentLinkPixInput>;
};


export type MutationAdminCreateLessonArgs = {
  chapterId: Scalars['String'];
  courseId: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminCreateLessonTemplateArgs = {
  contentBlocks?: Maybe<Array<ContentBlockInput>>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  organizationId: Scalars['String'];
  thumb: Scalars['String'];
};


export type MutationAdminCreateMemberArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  organizationId: Scalars['String'];
  policyIds: Array<Scalars['String']>;
};


export type MutationAdminCreateOrganizationArgs = {
  name: Scalars['String'];
};


export type MutationAdminCreateOtherProductArgs = {
  description?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataInput>>;
  name: Scalars['String'];
  organizationId: Scalars['String'];
  prices: Array<ProductPriceInput>;
  unitLabel?: Maybe<Scalars['String']>;
};


export type MutationAdminCreatePaymentArgs = {
  amount: Scalars['Int'];
  cardId?: Maybe<Scalars['String']>;
  cardToken?: Maybe<Scalars['String']>;
  currency: Currency;
  description?: Maybe<Scalars['String']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  installments?: Maybe<Scalars['Int']>;
  invoiceId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  paymentMethod: PaymentMethod;
  splitConfigId: Scalars['String'];
  studentUserId: Scalars['String'];
  userPaymentProfileId: Scalars['String'];
};


export type MutationAdminCreatePlanConfigArgs = {
  features?: Maybe<PlanConfigFeaturesInput>;
  organizationId: Scalars['String'];
};


export type MutationAdminCreatePolicyArgs = {
  name: Scalars['String'];
  organizationId: Scalars['String'];
  statements: Array<PolicyStatementsInput>;
  version: PolicyVersion;
};


export type MutationAdminCreateQuestionnaireExamArgs = {
  description?: Maybe<Scalars['String']>;
  maxRetryAmount?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  organizationId: Scalars['String'];
  passingGrade?: Maybe<QuestionnairePassingGradeInput>;
  questions?: Maybe<Array<QuestionInput>>;
  randomizeQuestions?: Maybe<Scalars['Boolean']>;
  timeLimit?: Maybe<Scalars['Float']>;
};


export type MutationAdminCreateQuestionnaireQuizArgs = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  organizationId: Scalars['String'];
  passingGrade?: Maybe<QuestionnairePassingGradeInput>;
  questions?: Maybe<Array<QuestionInput>>;
};


export type MutationAdminCreateQuestionnaireSurveyArgs = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  organizationId: Scalars['String'];
  questions?: Maybe<Array<QuestionInput>>;
};


export type MutationAdminCreateRecipientArgs = {
  country: CountryIsoCode;
  name: Scalars['String'];
  organizationId: Scalars['String'];
  taxIds?: Maybe<Array<TaxIdInput>>;
  type: LegalPersonType;
};


export type MutationAdminCreateRecipientBankAccountArgs = {
  accountDigit: Scalars['String'];
  accountNumber: Scalars['String'];
  accountType: BankAccountType;
  bankId: Scalars['String'];
  branchDigit?: Maybe<Scalars['String']>;
  branchNumber: Scalars['String'];
  country: CountryIsoCode;
  currency: Currency;
  organizationId: Scalars['String'];
  recipientId: Scalars['String'];
};


export type MutationAdminCreateReportQuestionnaireAnswersV1Args = {
  courseIds?: Maybe<Array<Scalars['String']>>;
  organizationId: Scalars['String'];
  studentIds?: Maybe<Array<Scalars['String']>>;
};


export type MutationAdminCreateReportUsersProgressV1Args = {
  courseIds?: Maybe<Array<Scalars['String']>>;
  organizationId: Scalars['String'];
  studentIds?: Maybe<Array<Scalars['String']>>;
};


export type MutationAdminCreateRoomArgs = {
  courseId: Scalars['String'];
  name: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminCreateSplitConfigArgs = {
  currency?: Maybe<Currency>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  rules: Array<SplitRuleInput>;
};


export type MutationAdminCreateStudentUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  organizationId: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberCountry?: Maybe<CountryIsoCode>;
  roles?: Maybe<Array<StudentUserRole>>;
  suppressCommunication?: Maybe<Scalars['Boolean']>;
};


export type MutationAdminCreateUserCardArgs = {
  cardHash: Scalars['String'];
  organizationId: Scalars['String'];
  studentUserId: Scalars['String'];
};


export type MutationAdminCreateUserCardWPagarmeExternalIdArgs = {
  organizationId: Scalars['String'];
  pagarmeExternalId: Scalars['String'];
  studentUserId: Scalars['String'];
};


export type MutationAdminCreateUserPaymentProfileArgs = {
  address?: Maybe<AddressInput>;
  country: CountryIsoCode;
  currency: Currency;
  name: Scalars['String'];
  organizationId: Scalars['String'];
  studentUserId: Scalars['String'];
  taxIds?: Maybe<Array<TaxIdInput>>;
  type: LegalPersonType;
};


export type MutationAdminCreateWithdrawalArgs = {
  amount: Scalars['Int'];
  bankAccountId: Scalars['String'];
  currency: Currency;
  description?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  recipientId: Scalars['String'];
};


export type MutationAdminDeleteCertificateArgs = {
  certificateSharedId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminDeleteCertificateTemplateArgs = {
  certificateTemplateSharedId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminDeleteChapterArgs = {
  chapterId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminDeleteCourseArgs = {
  courseId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminDeleteEnrolmentArgs = {
  enrolmentId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminDeleteInvoiceDiscountArgs = {
  invoiceDiscountId: Scalars['String'];
  invoiceId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminDeleteInvoicePaymentLinkArgs = {
  invoicePaymentLinkId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminDeleteLessonArgs = {
  lessonId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminDeleteMemberArgs = {
  organizationId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationAdminDeletePolicyArgs = {
  organizationId: Scalars['String'];
  policyId: Scalars['String'];
};


export type MutationAdminDeleteProductArgs = {
  organizationId: Scalars['String'];
  productId: Scalars['String'];
};


export type MutationAdminDeleteProductPriceArgs = {
  organizationId: Scalars['String'];
  productId: Scalars['String'];
  productPriceId: Scalars['String'];
};


export type MutationAdminDeleteQuestionnaireArgs = {
  organizationId: Scalars['String'];
  questionnaireSharedId: Scalars['String'];
};


export type MutationAdminDeleteRecipientBankAccountArgs = {
  bankAccountId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminDeleteStudentUserArgs = {
  organizationId: Scalars['String'];
  studentUserId: Scalars['String'];
};


export type MutationAdminDeleteUserCardArgs = {
  cardId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminDeleteUserPaymentProfileArgs = {
  organizationId: Scalars['String'];
  userPaymentProfileSharedId: Scalars['String'];
};


export type MutationAdminDetachPaymentFromInvoiceArgs = {
  organizationId: Scalars['String'];
  paymentId: Scalars['String'];
};


export type MutationAdminDetachPaymentScheduleFromInvoiceArgs = {
  organizationId: Scalars['String'];
  paymentScheduleId?: Maybe<Scalars['String']>;
  paymentScheduleSharedId?: Maybe<Scalars['String']>;
};


export type MutationAdminDetachUserFromInvoiceAccessArgs = {
  invoiceAccessId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminDuplicatePaymentArgs = {
  description?: Maybe<Scalars['String']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  organizationId: Scalars['String'];
  paymentId: Scalars['String'];
};


export type MutationAdminGenerateCertificateTemplatePreviewArgs = {
  organizationId: Scalars['String'];
  pages: Array<CertificateTemplatePageInput>;
  previewPayload?: Maybe<CertificatePayloadInput>;
};


export type MutationAdminGenerateInvoiceAccessInvitationArgs = {
  invoiceAccessId: Scalars['String'];
  liberationRule: InvoiceAccessLiberationRuleType;
  organizationId: Scalars['String'];
};


export type MutationAdminGenerateMultiCertificateBaseExcelArgs = {
  certificateTemplateId: Scalars['String'];
  courseId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  roomId?: Maybe<Scalars['String']>;
};


export type MutationAdminGeneratePaymentSchedulesArgs = {
  amount: Scalars['Int'];
  cardId?: Maybe<Scalars['String']>;
  cardToken?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  firstPaymentExpirationDate?: Maybe<Scalars['DateTime']>;
  firstPaymentGenerationDate?: Maybe<Scalars['DateTime']>;
  installments: Scalars['Int'];
  invoiceId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  paymentExpirationDayInMonth?: Maybe<Scalars['Int']>;
  paymentGenerationDayInMonth?: Maybe<Scalars['Int']>;
  paymentGenerationDaysBeforeExpiration?: Maybe<Scalars['Int']>;
  paymentMethod: PaymentSchedulePaymentMethod;
  splitConfigId: Scalars['String'];
  studentUserId: Scalars['String'];
  userPaymentProfileId: Scalars['String'];
};


export type MutationAdminGenerateStudentMagicTokenArgs = {
  organizationId: Scalars['String'];
  studentUserId: Scalars['String'];
};


export type MutationAdminGrantInvoiceAccessArgs = {
  invoiceAccessId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminRefundPaymentArgs = {
  bankAccount?: Maybe<RefundPaymentBankAccountInput>;
  description?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  paymentId: Scalars['String'];
  reason: RefundReason;
  refundAmount: Scalars['Int'];
};


export type MutationAdminResetPasswordArgs = {
  forgotPasswordToken: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationAdminRetryPaymentScheduleArgs = {
  cardId?: Maybe<Scalars['String']>;
  cardToken?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  paymentScheduleId: Scalars['String'];
};


export type MutationAdminSendResetPasswordTokenArgs = {
  email: Scalars['String'];
};


export type MutationAdminSimulateAnticipationArgs = {
  amount: Scalars['Int'];
  organizationId: Scalars['String'];
  paymentDate?: Maybe<Scalars['DateTime']>;
  recipientId: Scalars['String'];
  timeframe: AnticipationTimeframe;
};


export type MutationAdminSuspendInvoiceAccessArgs = {
  invoiceAccessId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationAdminSyncPaymentArgs = {
  organizationId: Scalars['String'];
  paymentId: Scalars['String'];
};


export type MutationAdminUnarchiveProductArgs = {
  organizationId: Scalars['String'];
  productId: Scalars['String'];
};


export type MutationAdminUnarchiveProductPriceArgs = {
  organizationId: Scalars['String'];
  productId: Scalars['String'];
  productPriceId: Scalars['String'];
};


export type MutationAdminUpdateAccessProductArgs = {
  accessExpirationRule?: Maybe<AccessExpirationRuleDiscriminatorInput>;
  accesses?: Maybe<Array<ProductAccessDiscriminatorInput>>;
  description?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataInput>>;
  name?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  prices?: Maybe<Array<ProductPriceMethodInput>>;
  productId: Scalars['String'];
  unitLabel?: Maybe<Scalars['String']>;
};


export type MutationAdminUpdateCertificateArgs = {
  certificateId: Scalars['String'];
  organizationId: Scalars['String'];
  payload?: Maybe<CertificatePayloadInput>;
  suppressCommunication?: Maybe<Scalars['Boolean']>;
};


export type MutationAdminUpdateCertificateTemplateArgs = {
  certificateTemplateId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  pages?: Maybe<Array<CertificateTemplatePageInput>>;
};


export type MutationAdminUpdateChapterArgs = {
  chapterId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  status?: Maybe<ChapterStatus>;
};


export type MutationAdminUpdateCheckoutArgs = {
  checkoutId: Scalars['String'];
  currency?: Maybe<Currency>;
  description?: Maybe<Scalars['String']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  invoiceDiscountMethods?: Maybe<Array<InvoiceDiscountMethodInput>>;
  invoiceItems?: Maybe<Array<InvoiceItemDiscriminatorInput>>;
  organizationId: Scalars['String'];
  paymentMethodsConfig?: Maybe<CheckoutPaymentMethodsConfigInput>;
  splitConfigId?: Maybe<Scalars['String']>;
  status?: Maybe<CheckoutStatus>;
};


export type MutationAdminUpdateCourseArgs = {
  backgroundImageId?: Maybe<Scalars['String']>;
  certificateTemplateSharedId?: Maybe<Scalars['String']>;
  completionPercent?: Maybe<Scalars['Float']>;
  content?: Maybe<Array<CourseContentField>>;
  courseId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<CourseStatus>;
};


export type MutationAdminUpdateFileArgs = {
  altText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fileId: Scalars['String'];
  organizationId: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};


export type MutationAdminUpdateInvoiceArgs = {
  description?: Maybe<Scalars['String']>;
  discounts?: Maybe<Array<InvoiceDiscountMethodInput>>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  invoiceId: Scalars['String'];
  items?: Maybe<Array<InvoiceItemDiscriminatorInput>>;
  organizationId: Scalars['String'];
  splitConfigId?: Maybe<Scalars['String']>;
  status?: Maybe<InvoiceStatus>;
  userPaymentProfileId?: Maybe<Scalars['String']>;
};


export type MutationAdminUpdateInvoiceAccessArgs = {
  invoiceAccessId: Scalars['String'];
  liberationRule: InvoiceAccessLiberationRuleType;
  organizationId: Scalars['String'];
};


export type MutationAdminUpdateInvoicePaymentLinkArgs = {
  amount?: Maybe<Scalars['Int']>;
  bankSlip?: Maybe<InvoicePaymentLinkBankSlipInput>;
  creditCard?: Maybe<InvoicePaymentLinkCreditCardInput>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  invoicePaymentLinkId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  pix?: Maybe<InvoicePaymentLinkPixInput>;
};


export type MutationAdminUpdateLessonArgs = {
  completionRequired?: Maybe<Scalars['Boolean']>;
  contentBlocks?: Maybe<Array<ContentBlockInput>>;
  expirationRule?: Maybe<DateConstraintInput>;
  icon?: Maybe<Scalars['String']>;
  lessonId: Scalars['String'];
  liberationRule?: Maybe<LessonLiberationRuleInput>;
  name?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  status?: Maybe<LessonStatus>;
};


export type MutationAdminUpdateMemberArgs = {
  organizationId: Scalars['String'];
  policyIds?: Maybe<Array<Scalars['String']>>;
  userId: Scalars['String'];
};


export type MutationAdminUpdateOrganizationArgs = {
  appearance?: Maybe<OrganizationAppearanceInput>;
  config?: Maybe<OrganizationConfigInput>;
  domains?: Maybe<Array<Scalars['String']>>;
  emailReplyToAddress?: Maybe<Scalars['String']>;
  emailSenderAddress?: Maybe<Scalars['String']>;
  linkedInOrganizationId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  payment?: Maybe<OrganizationPaymentInput>;
  subdomains?: Maybe<Array<Scalars['String']>>;
};


export type MutationAdminUpdateOtherProductArgs = {
  description?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataInput>>;
  name?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  prices?: Maybe<Array<ProductPriceMethodInput>>;
  productId: Scalars['String'];
  unitLabel?: Maybe<Scalars['String']>;
};


export type MutationAdminUpdatePaymentArgs = {
  description?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  paymentId: Scalars['String'];
};


export type MutationAdminUpdatePaymentScheduleArgs = {
  amount?: Maybe<Scalars['Int']>;
  cardId?: Maybe<Scalars['String']>;
  cardToken?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  invoiceId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  paymentMethod?: Maybe<PaymentSchedulePaymentMethod>;
  paymentScheduleSharedId: Scalars['String'];
  paymentSchedules: Array<PaymentSchedulesUpdateInput>;
  splitConfigId?: Maybe<Scalars['String']>;
  studentUserId?: Maybe<Scalars['String']>;
  userPaymentProfileId?: Maybe<Scalars['String']>;
};


export type MutationAdminUpdatePlanConfigArgs = {
  features?: Maybe<PlanConfigFeaturesInput>;
  organizationId: Scalars['String'];
  planConfigId: Scalars['String'];
};


export type MutationAdminUpdatePolicyArgs = {
  name?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  policyId: Scalars['String'];
  statements?: Maybe<Array<PolicyStatementsInput>>;
};


export type MutationAdminUpdateProductPriceArgs = {
  billingConfig?: Maybe<ProductPriceBillingConfigDiscriminatorInput>;
  currency?: Maybe<Currency>;
  description?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataInput>>;
  organizationId: Scalars['String'];
  paymentConfig?: Maybe<ProductPricePaymentConfigDiscriminatorInput>;
  productId: Scalars['String'];
  productPriceId: Scalars['String'];
};


export type MutationAdminUpdateProfileArgs = {
  currentPassword?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  newPassword?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberCountry?: Maybe<CountryIsoCode>;
};


export type MutationAdminUpdateQuestionnaireExamArgs = {
  description?: Maybe<Scalars['String']>;
  maxRetryAmount?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  passingGrade?: Maybe<QuestionnairePassingGradeInput>;
  questionnaireId: Scalars['String'];
  questions?: Maybe<Array<QuestionInput>>;
  randomizeQuestions?: Maybe<Scalars['Boolean']>;
  timeLimit?: Maybe<Scalars['Float']>;
};


export type MutationAdminUpdateQuestionnaireQuizArgs = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  passingGrade?: Maybe<QuestionnairePassingGradeInput>;
  questionnaireId: Scalars['String'];
  questions?: Maybe<Array<QuestionInput>>;
};


export type MutationAdminUpdateQuestionnaireSurveyArgs = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  questionnaireId: Scalars['String'];
  questions?: Maybe<Array<QuestionInput>>;
};


export type MutationAdminUpdateRecipientArgs = {
  backgroundCheck?: Maybe<RecipientBackgroundCheck>;
  name?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  recipientId: Scalars['String'];
};


export type MutationAdminUpdateRecipientBankAccountArgs = {
  accountDigit?: Maybe<Scalars['String']>;
  accountNumber?: Maybe<Scalars['String']>;
  accountType?: Maybe<BankAccountType>;
  bankAccountId: Scalars['String'];
  bankId?: Maybe<Scalars['String']>;
  branchDigit?: Maybe<Scalars['String']>;
  branchNumber?: Maybe<Scalars['String']>;
  country?: Maybe<CountryIsoCode>;
  currency?: Maybe<Currency>;
  organizationId: Scalars['String'];
};


export type MutationAdminUpdateRoomArgs = {
  expirationRule?: Maybe<DateConstraintInput>;
  liberationRule?: Maybe<DateConstraintInput>;
  name: Scalars['String'];
  organizationId: Scalars['String'];
  roomId: Scalars['String'];
};


export type MutationAdminUpdateStudentUserArgs = {
  definePasswordNextAccess?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberCountry?: Maybe<CountryIsoCode>;
  studentUserId: Scalars['String'];
};


export type MutationAdminUpdateUserPaymentProfileArgs = {
  address?: Maybe<AddressInput>;
  country?: Maybe<CountryIsoCode>;
  name?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  taxIds?: Maybe<Array<TaxIdInput>>;
  type?: Maybe<LegalPersonType>;
  userPaymentProfileId: Scalars['String'];
};


export type MutationAdminUserSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationAdminUserSignUpArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberCountry?: Maybe<CountryIsoCode>;
};


export type MutationAuthenticateMagicTokenArgs = {
  magicToken: Scalars['String'];
};


export type MutationPublicCancelCheckoutPaymentArgs = {
  checkoutSharedId: Scalars['String'];
  paymentId: Scalars['String'];
};


export type MutationPublicCancelInvoicePaymentLinkPaymentArgs = {
  accessToken: Scalars['String'];
};


export type MutationPublicCreateCheckoutPaymentArgs = {
  checkoutSharedId: Scalars['String'];
  paymentCreationArgs: CheckoutPaymentCreationInput;
  upsertStudentUserArgs: CheckoutUpsertStudentInput;
  upsertUserPaymentProfileArgs: CheckoutUpsertUserPProfileInput;
};


export type MutationPublicCreatePaymentFromInvoicePaymentLinkArgs = {
  accessToken: Scalars['String'];
  cardId?: Maybe<Scalars['String']>;
  cardToken?: Maybe<Scalars['String']>;
  installments?: Maybe<Scalars['Int']>;
  paymentMethod: PaymentMethod;
  saveUserCard?: Maybe<Scalars['Boolean']>;
};


export type MutationStudentChangeEmailArgs = {
  email: Scalars['String'];
};


export type MutationStudentChangePasswordArgs = {
  newPassword: Scalars['String'];
  password: Scalars['String'];
};


export type MutationStudentCreateCertificateArgs = {
  certificateTemplateSharedId?: Maybe<Scalars['String']>;
  courseId: Scalars['String'];
  payload?: Maybe<StudentCreateCertificatePayloadInput>;
};


export type MutationStudentCreateUserCardArgs = {
  cardHash: Scalars['String'];
};


export type MutationStudentCreateUserPaymentProfileArgs = {
  address?: Maybe<AddressInput>;
  country: CountryIsoCode;
  currency: Currency;
  name: Scalars['String'];
  taxIds?: Maybe<Array<TaxIdInput>>;
  type: LegalPersonType;
};


export type MutationStudentDefinePasswordArgs = {
  newPassword: Scalars['String'];
};


export type MutationStudentDeleteUserPaymentProfileArgs = {
  userPaymentProfileSharedId: Scalars['String'];
};


export type MutationStudentResetPasswordArgs = {
  forgotPasswordToken: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationStudentSendResetPasswordTokenArgs = {
  email: Scalars['String'];
  organizationId: Scalars['String'];
};


export type MutationStudentUpdateCourseStateArgs = {
  courseId: Scalars['String'];
  lastLessonId: Scalars['String'];
  lastVideoSeconds?: Maybe<Scalars['Float']>;
};


export type MutationStudentUpdateProfileArgs = {
  currentPassword?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  newPassword?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberCountry?: Maybe<CountryIsoCode>;
};


export type MutationStudentUpdateProgressArgs = {
  completed?: Maybe<Scalars['Boolean']>;
  courseId: Scalars['String'];
  lessonId: Scalars['String'];
  rating?: Maybe<Scalars['Float']>;
};


export type MutationStudentUpdateUserPaymentProfileArgs = {
  address?: Maybe<AddressInput>;
  country?: Maybe<CountryIsoCode>;
  name?: Maybe<Scalars['String']>;
  taxIds?: Maybe<Array<TaxIdInput>>;
  type?: Maybe<LegalPersonType>;
  userPaymentProfileId: Scalars['String'];
};


export type MutationStudentUpsertQuestionnaireAnswerArgs = {
  answers: Array<AnswerInput>;
  courseId: Scalars['String'];
  lessonId: Scalars['String'];
  questionnaireId: Scalars['String'];
  startedAt?: Maybe<Scalars['DateTime']>;
};


export type MutationStudentUserSignInArgs = {
  email: Scalars['String'];
  organizationId: Scalars['String'];
  password: Scalars['String'];
};


export type MutationStudentUserSignUpArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  organizationId: Scalars['String'];
  password: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberCountry?: Maybe<CountryIsoCode>;
};


export type MutationStudentUsesInvoiceAccessInvitationArgs = {
  invoiceAccessInvitationToken: Scalars['String'];
};

export type NumberFilterInput = {
  eq?: Maybe<Scalars['Float']>;
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
};


export type ObjectIdFilterInput = {
  eq?: Maybe<Scalars['String']>;
  exists?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Scalars['String']>>;
};

export type OneTimeProductPrice = ProductPricePaymentConfig & {
  __typename?: 'OneTimeProductPrice';
  type: ProductPricePaymentType;
};

export type OneTimeProductPriceInput = {
  type: ProductPricePaymentType;
};

export type Operation = {
  balanceOperation: BalanceOperation;
  type: OperationType;
};

export enum OperationType {
  BankSlipPayment = 'BANK_SLIP_PAYMENT',
  BankSlipRefund = 'BANK_SLIP_REFUND',
  BankSlipRefundFee = 'BANK_SLIP_REFUND_FEE',
  BankSlipRefundReversal = 'BANK_SLIP_REFUND_REVERSAL',
  CreditCardAnticipatedPayablePayment = 'CREDIT_CARD_ANTICIPATED_PAYABLE_PAYMENT',
  CreditCardPayableChargeback = 'CREDIT_CARD_PAYABLE_CHARGEBACK',
  CreditCardPayableChargebackRefund = 'CREDIT_CARD_PAYABLE_CHARGEBACK_REFUND',
  CreditCardPayablePayment = 'CREDIT_CARD_PAYABLE_PAYMENT',
  CreditCardPayableRefund = 'CREDIT_CARD_PAYABLE_REFUND',
  PixPayment = 'PIX_PAYMENT',
  PixRefund = 'PIX_REFUND',
  TransferPayment = 'TRANSFER_PAYMENT',
  TransferRefund = 'TRANSFER_REFUND',
  UnknownOperation = 'UNKNOWN_OPERATION'
}

export type Option = {
  __typename?: 'Option';
  _id: Scalars['ObjectId'];
  correct: Scalars['Boolean'];
  title: Scalars['String'];
};

export type OptionInput = {
  correct: Scalars['Boolean'];
  title: Scalars['String'];
};

/** orders by direction */
export enum OrderByDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Type representing the organization */
export type Organization = {
  __typename?: 'Organization';
  _id: Scalars['ObjectId'];
  appearance?: Maybe<OrganizationAppearance>;
  config?: Maybe<OrganizationConfig>;
  createdAt: Scalars['DateTime'];
  domains: Array<Scalars['String']>;
  emailReplyToAddress: Scalars['String'];
  emailSenderAddress?: Maybe<Scalars['String']>;
  linkedInOrganizationId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  payment?: Maybe<OrganizationPayment>;
  subdomains: Array<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type OrganizationAppearance = {
  __typename?: 'OrganizationAppearance';
  logo?: Maybe<FilestackS3File>;
  logoId?: Maybe<Scalars['String']>;
  primaryColor: Scalars['String'];
  squareLogo32?: Maybe<FilestackS3File>;
  squareLogo32Id?: Maybe<Scalars['String']>;
  squareLogo256?: Maybe<FilestackS3File>;
  squareLogo256Id?: Maybe<Scalars['String']>;
};

export type OrganizationAppearanceInput = {
  logoId?: Maybe<Scalars['String']>;
  primaryColor?: Maybe<Scalars['String']>;
  squareLogo32Id?: Maybe<Scalars['String']>;
  squareLogo256Id?: Maybe<Scalars['String']>;
};

export type OrganizationConfig = {
  __typename?: 'OrganizationConfig';
  country?: Maybe<CountryIsoCode>;
  timezone?: Maybe<Scalars['String']>;
};

export type OrganizationConfigInput = {
  country?: Maybe<CountryIsoCode>;
  timezone?: Maybe<Scalars['String']>;
};

export type OrganizationOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  name?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type OrganizationPayment = {
  __typename?: 'OrganizationPayment';
  creditCard?: Maybe<OrganizationPaymentCreditCard>;
};

export type OrganizationPaymentCreditCard = {
  __typename?: 'OrganizationPaymentCreditCard';
  /** max characters: 13 */
  softDescriptor?: Maybe<Scalars['String']>;
};

export type OrganizationPaymentCreditCardInput = {
  /** max characters: 13 */
  softDescriptor?: Maybe<Scalars['String']>;
};

export type OrganizationPaymentInput = {
  creditCard?: Maybe<OrganizationPaymentCreditCardInput>;
};

export type OtherProduct = EntityCommonFieldsInterface & Product & {
  __typename?: 'OtherProduct';
  _id: Scalars['ObjectId'];
  archivedAt?: Maybe<Scalars['DateTime']>;
  archivedBy?: Maybe<AdminUser>;
  archivedById?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<AdminUser>;
  createdById?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<AdminUser>;
  deletedById?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isBeingUsed?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Array<Metadata>>;
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  prices: Array<ProductPrice>;
  type: ProductType;
  unitLabel?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<AdminUser>;
  updatedById?: Maybe<Scalars['String']>;
};

export type PackageProductPrice = ProductPriceBillingConfig & {
  __typename?: 'PackageProductPrice';
  packageAmount: Scalars['Float'];
  type: ProductPriceBillingType;
  unitsPerPackage: Scalars['Int'];
};

export type PackageProductPriceInput = {
  packageAmount: Scalars['Float'];
  type: ProductPriceBillingType;
  unitsPerPackage: Scalars['Int'];
};

export type PagePaginationInput = {
  /** default: 20, max: 200 */
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type PaginatedAnticipationResponse = {
  __typename?: 'PaginatedAnticipationResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Anticipation>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedBankAccountResponse = {
  __typename?: 'PaginatedBankAccountResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<BankAccount>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedBankResponse = {
  __typename?: 'PaginatedBankResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Bank>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedCardResponse = {
  __typename?: 'PaginatedCardResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Card>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedCertificateResponse = {
  __typename?: 'PaginatedCertificateResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Certificate>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedChapterResponse = {
  __typename?: 'PaginatedChapterResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Chapter>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedCheckoutResponse = {
  __typename?: 'PaginatedCheckoutResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Checkout>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedCourseResponse = {
  __typename?: 'PaginatedCourseResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Course>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedDenormalizedEnrolmentResponse = {
  __typename?: 'PaginatedDenormalizedEnrolmentResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<DenormalizedEnrolment>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedEnrolmentResponse = {
  __typename?: 'PaginatedEnrolmentResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Enrolment>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedFileResponse = {
  __typename?: 'PaginatedFileResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<File>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedInvoiceAccessResponse = {
  __typename?: 'PaginatedInvoiceAccessResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<InvoiceAccess>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedInvoiceAccessSummaryResponse = {
  __typename?: 'PaginatedInvoiceAccessSummaryResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<InvoiceAccessSummary>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedInvoicePaymentLinkResponse = {
  __typename?: 'PaginatedInvoicePaymentLinkResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<InvoicePaymentLink>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedInvoiceResponse = {
  __typename?: 'PaginatedInvoiceResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Invoice>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedLessonResponse = {
  __typename?: 'PaginatedLessonResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Lesson>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedLogResponse = {
  __typename?: 'PaginatedLogResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Log>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedMemberResponse = {
  __typename?: 'PaginatedMemberResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Member>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedOrganizationResponse = {
  __typename?: 'PaginatedOrganizationResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Organization>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedPaymentResponse = {
  __typename?: 'PaginatedPaymentResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Payment>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedPaymentScheduleResponse = {
  __typename?: 'PaginatedPaymentScheduleResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<PaymentSchedule>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedPolicyResponse = {
  __typename?: 'PaginatedPolicyResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Policy>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedProductResponse = {
  __typename?: 'PaginatedProductResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Product>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedPurchaseResponse = {
  __typename?: 'PaginatedPurchaseResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Purchase>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedQuestionnaireResponse = {
  __typename?: 'PaginatedQuestionnaireResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Questionnaire>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedRecipientResponse = {
  __typename?: 'PaginatedRecipientResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Recipient>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedRefundResponse = {
  __typename?: 'PaginatedRefundResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Refund>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedReportResponse = {
  __typename?: 'PaginatedReportResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Report>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedRoomResponse = {
  __typename?: 'PaginatedRoomResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Room>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedSplitConfigResponse = {
  __typename?: 'PaginatedSplitConfigResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<SplitConfig>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedStudentUserResponse = {
  __typename?: 'PaginatedStudentUserResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<StudentUser>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedUserCourseStateResponse = {
  __typename?: 'PaginatedUserCourseStateResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<UserCourseState>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedUserPaymentProfileResponse = {
  __typename?: 'PaginatedUserPaymentProfileResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<UserPaymentProfile>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedUserProgressResponse = {
  __typename?: 'PaginatedUserProgressResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<UserProgress>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedUserQuestionnaireAnswerResponse = {
  __typename?: 'PaginatedUserQuestionnaireAnswerResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<UserQuestionnaireAnswer>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PaginatedWithdrawalResponse = {
  __typename?: 'PaginatedWithdrawalResponse';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  results: Array<Withdrawal>;
  totalPageCount: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type Payable = {
  __typename?: 'Payable';
  amount: Scalars['Int'];
  anticipationFeeAmount?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  feeAmount: Scalars['Int'];
  id: Scalars['String'];
  installment?: Maybe<Scalars['Int']>;
  originalPaymentDate?: Maybe<Scalars['DateTime']>;
  paymentDate: Scalars['DateTime'];
  recipient?: Maybe<Recipient>;
  status?: Maybe<PayableStatus>;
  type?: Maybe<PayableType>;
};

export enum PayableStatus {
  Paid = 'PAID',
  Prepaid = 'PREPAID',
  WaitingFunds = 'WAITING_FUNDS'
}

export enum PayableType {
  Chargeback = 'CHARGEBACK',
  ChargebackRefund = 'CHARGEBACK_REFUND',
  Credit = 'CREDIT',
  Refund = 'REFUND',
  RefundReversal = 'REFUND_REVERSAL'
}

export type Payment = {
  _id: Scalars['ObjectId'];
  amount: Scalars['Int'];
  checkout?: Maybe<Checkout>;
  checkoutId?: Maybe<Scalars['String']>;
  checkoutSharedId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  currency?: Maybe<Currency>;
  description?: Maybe<Scalars['String']>;
  failCode?: Maybe<Scalars['String']>;
  failMessage?: Maybe<Scalars['String']>;
  hasGeneratingSharedPaymentSchedules: Scalars['Boolean'];
  invoice?: Maybe<Invoice>;
  invoiceId?: Maybe<Scalars['String']>;
  invoicePaymentLink?: Maybe<InvoicePaymentLink>;
  invoicePaymentLinkId?: Maybe<Scalars['String']>;
  modality: PaymentModality;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  pagarmeExternalId?: Maybe<Scalars['String']>;
  paymentMethod: PaymentMethod;
  paymentSchedule?: Maybe<PaymentSchedule>;
  paymentScheduleId?: Maybe<Scalars['String']>;
  paymentScheduleSharedId?: Maybe<Scalars['String']>;
  planConfig?: Maybe<PlanConfig>;
  planConfigId?: Maybe<Scalars['String']>;
  planConfigSharedId: Scalars['String'];
  purchase?: Maybe<Purchase>;
  purchaseId?: Maybe<Scalars['String']>;
  refundedAmount?: Maybe<Scalars['Float']>;
  refunds: Array<Refund>;
  scheduleInstallment?: Maybe<Scalars['Int']>;
  scheduleTotalAmount?: Maybe<Scalars['Int']>;
  scheduleTotalInstallments?: Maybe<Scalars['Int']>;
  splitConfig?: Maybe<SplitConfig>;
  splitConfigId?: Maybe<Scalars['String']>;
  status?: Maybe<PaymentStatus>;
  statusAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
  userPaymentProfile?: Maybe<UserPaymentProfile>;
  userPaymentProfileId?: Maybe<Scalars['String']>;
  userPaymentProfileSharedId: Scalars['String'];
};

export type PaymentFee = {
  __typename?: 'PaymentFee';
  chargeGatewayProcessingFee?: Maybe<Scalars['Boolean']>;
  engagedResponsibleForChargeback?: Maybe<Scalars['Boolean']>;
  engagedResponsibleForRefund?: Maybe<Scalars['Boolean']>;
  fixedFee?: Maybe<FixedFee>;
  minFee?: Maybe<FixedFee>;
  spreadFee?: Maybe<SpreadFee>;
};

export type PaymentFeeInput = {
  chargeGatewayProcessingFee?: Maybe<Scalars['Boolean']>;
  engagedResponsibleForChargeback?: Maybe<Scalars['Boolean']>;
  engagedResponsibleForRefund?: Maybe<Scalars['Boolean']>;
  fixedFee?: Maybe<FixedFeeInput>;
  minFee?: Maybe<FixedFeeInput>;
  spreadFee?: Maybe<SpreadFeeInput>;
};

export type PaymentHistoryOperation = {
  __typename?: 'PaymentHistoryOperation';
  amount?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  endedAt?: Maybe<Scalars['DateTime']>;
  failReason?: Maybe<Scalars['String']>;
  model: PaymentHistoryOperationModel;
  processorResponseCode?: Maybe<Scalars['String']>;
  rollbacked: Scalars['Boolean'];
  startedAt?: Maybe<Scalars['DateTime']>;
  status: PaymentHistoryOperationStatus;
  type: PaymentHistoryOperationType;
  updatedAt: Scalars['DateTime'];
};

export enum PaymentHistoryOperationModel {
  Card = 'CARD',
  Payment = 'PAYMENT',
  Subscription = 'SUBSCRIPTION'
}

export enum PaymentHistoryOperationStatus {
  Deferred = 'DEFERRED',
  Dropped = 'DROPPED',
  Failed = 'FAILED',
  Processing = 'PROCESSING',
  Success = 'SUCCESS',
  Waiting = 'WAITING'
}

export enum PaymentHistoryOperationType {
  Analyze = 'ANALYZE',
  Authorize = 'AUTHORIZE',
  BankSlipPaid = 'BANK_SLIP_PAID',
  Capture = 'CAPTURE',
  Chargeback = 'CHARGEBACK',
  Conciliate = 'CONCILIATE',
  Issue = 'ISSUE',
  PixPaid = 'PIX_PAID',
  Refund = 'REFUND'
}

export type PaymentInvoiceResponse = {
  __typename?: 'PaymentInvoiceResponse';
  invoice: Invoice;
  payment: Payment;
};

export type PaymentLogState = {
  __typename?: 'PaymentLogState';
  payment: Payment;
  paymentId: Scalars['String'];
};

export enum PaymentMethod {
  BankSlip = 'BANK_SLIP',
  CreditCard = 'CREDIT_CARD',
  Money = 'MONEY',
  Pix = 'PIX'
}

export type PaymentMethodEnumFilterInput = {
  eq?: Maybe<PaymentMethod>;
  exists?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<PaymentMethod>>;
};

export enum PaymentModality {
  Punctual = 'PUNCTUAL',
  Recurrent = 'RECURRENT'
}

export type PaymentOrderByInput = {
  amount?: Maybe<OrderByDirection>;
  createdAt?: Maybe<OrderByDirection>;
  expirationDate?: Maybe<OrderByDirection>;
  scheduleInstallment?: Maybe<OrderByDirection>;
  scheduleTotalInstallments?: Maybe<OrderByDirection>;
  statusAt?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type PaymentSchedule = {
  __typename?: 'PaymentSchedule';
  _id: Scalars['ObjectId'];
  amount: Scalars['Int'];
  card?: Maybe<Card>;
  cardId?: Maybe<Scalars['String']>;
  cardToken?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  hasGeneratingSharedPaymentSchedules: Scalars['Boolean'];
  /** The total amount submitted when the payment schedules are first generated. */
  initialTotalAmount?: Maybe<Scalars['Int']>;
  installment: Scalars['Int'];
  invoice?: Maybe<Invoice>;
  invoiceId?: Maybe<Scalars['String']>;
  modality: PaymentModality;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  paymentDate: Scalars['DateTime'];
  paymentMethod: PaymentMethod;
  payments?: Maybe<Array<Payment>>;
  sharedId: Scalars['String'];
  splitConfig?: Maybe<SplitConfig>;
  splitConfigId?: Maybe<Scalars['String']>;
  status: PaymentScheduleStatus;
  statusAt: Scalars['DateTime'];
  totalAmount: Scalars['Int'];
  totalInstallments: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
  user?: Maybe<StudentUser>;
  userId?: Maybe<Scalars['String']>;
  userPaymentProfile?: Maybe<UserPaymentProfile>;
  userPaymentProfileId?: Maybe<Scalars['String']>;
  userPaymentProfileSharedId: Scalars['String'];
};

export type PaymentScheduleInvoiceResponse = {
  __typename?: 'PaymentScheduleInvoiceResponse';
  invoice: Invoice;
  paymentSchedule: PaymentSchedule;
};

export type PaymentScheduleLogState = {
  __typename?: 'PaymentScheduleLogState';
  paymentSchedule: PaymentSchedule;
};

export type PaymentScheduleOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  expirationDate?: Maybe<OrderByDirection>;
  paymentDate?: Maybe<OrderByDirection>;
  statusAt?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export enum PaymentSchedulePaymentMethod {
  BankSlip = 'BANK_SLIP',
  CreditCard = 'CREDIT_CARD',
  Pix = 'PIX'
}

export enum PaymentScheduleStatus {
  Canceled = 'CANCELED',
  Failed = 'FAILED',
  Overdue = 'OVERDUE',
  Paid = 'PAID',
  PaymentCreated = 'PAYMENT_CREATED',
  Pending = 'PENDING'
}

export type PaymentScheduleStatusEnumFilterInput = {
  eq?: Maybe<PaymentScheduleStatus>;
  exists?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<PaymentScheduleStatus>>;
};

export type PaymentScheduleWhereInput = {
  _id?: Maybe<ObjectIdFilterInput>;
  amount?: Maybe<NumberFilterInput>;
  and?: Maybe<Array<PaymentScheduleWhereInput>>;
  createdAt?: Maybe<DateFilterInput>;
  description?: Maybe<StringFilterInput>;
  expirationDate?: Maybe<DateFilterInput>;
  installment?: Maybe<NumberFilterInput>;
  or?: Maybe<Array<PaymentScheduleWhereInput>>;
  paymentDate?: Maybe<DateFilterInput>;
  paymentMethod?: Maybe<PaymentMethodEnumFilterInput>;
  status?: Maybe<PaymentScheduleStatusEnumFilterInput>;
  statusAt?: Maybe<DateFilterInput>;
  totalInstallments?: Maybe<NumberFilterInput>;
  updatedAt?: Maybe<DateFilterInput>;
};

export type PaymentSchedulesUpdateInput = {
  paymentExpirationDate?: Maybe<Scalars['DateTime']>;
  paymentGenerationDate?: Maybe<Scalars['DateTime']>;
  paymentScheduleId: Scalars['String'];
};

export enum PaymentStatus {
  Analyzing = 'ANALYZING',
  Authorized = 'AUTHORIZED',
  Canceled = 'CANCELED',
  Chargedback = 'CHARGEDBACK',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Paid = 'PAID',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  Pending = 'PENDING',
  PendingRefund = 'PENDING_REFUND',
  PendingReview = 'PENDING_REVIEW',
  Processing = 'PROCESSING',
  Refunded = 'REFUNDED',
  Refused = 'REFUSED',
  WaitingPayment = 'WAITING_PAYMENT'
}

export type PaymentStatusEnumFilterInput = {
  eq?: Maybe<PaymentStatus>;
  exists?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<PaymentStatus>>;
};

export type PaymentWhereInput = {
  _id?: Maybe<ObjectIdFilterInput>;
  and?: Maybe<Array<PaymentWhereInput>>;
  createdAt?: Maybe<DateFilterInput>;
  currency?: Maybe<CurrencyEnumFilterInput>;
  description?: Maybe<StringFilterInput>;
  expirationDate?: Maybe<DateFilterInput>;
  or?: Maybe<Array<PaymentWhereInput>>;
  paymentMethod?: Maybe<PaymentMethodEnumFilterInput>;
  scheduleInstallment?: Maybe<NumberFilterInput>;
  scheduleTotalInstallments?: Maybe<NumberFilterInput>;
  status?: Maybe<PaymentStatusEnumFilterInput>;
  statusAt?: Maybe<DateFilterInput>;
  updatedAt?: Maybe<DateFilterInput>;
};

export type PerUnitProductPrice = ProductPriceBillingConfig & {
  __typename?: 'PerUnitProductPrice';
  type: ProductPriceBillingType;
  unitAmount: Scalars['Float'];
};

export type PerUnitProductPriceInput = {
  type: ProductPriceBillingType;
  unitAmount: Scalars['Float'];
};

export type PixPayment = EntityCommonFieldsInterface & Payment & {
  __typename?: 'PixPayment';
  _id: Scalars['ObjectId'];
  amount: Scalars['Int'];
  checkout?: Maybe<Checkout>;
  checkoutId?: Maybe<Scalars['String']>;
  checkoutSharedId?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  currency?: Maybe<Currency>;
  description?: Maybe<Scalars['String']>;
  expirationDate: Scalars['DateTime'];
  failCode?: Maybe<Scalars['String']>;
  failMessage?: Maybe<Scalars['String']>;
  hasGeneratingSharedPaymentSchedules: Scalars['Boolean'];
  invoice?: Maybe<Invoice>;
  invoiceId?: Maybe<Scalars['String']>;
  invoicePaymentLink?: Maybe<InvoicePaymentLink>;
  invoicePaymentLinkId?: Maybe<Scalars['String']>;
  modality: PaymentModality;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  pagarmeExternalId?: Maybe<Scalars['String']>;
  paymentMethod: PaymentMethod;
  paymentSchedule?: Maybe<PaymentSchedule>;
  paymentScheduleId?: Maybe<Scalars['String']>;
  paymentScheduleSharedId?: Maybe<Scalars['String']>;
  planConfig?: Maybe<PlanConfig>;
  planConfigId?: Maybe<Scalars['String']>;
  planConfigSharedId: Scalars['String'];
  purchase?: Maybe<Purchase>;
  purchaseId?: Maybe<Scalars['String']>;
  qrCodeUrl: Scalars['String'];
  refundedAmount?: Maybe<Scalars['Float']>;
  refunds: Array<Refund>;
  scheduleInstallment?: Maybe<Scalars['Int']>;
  scheduleTotalAmount?: Maybe<Scalars['Int']>;
  scheduleTotalInstallments?: Maybe<Scalars['Int']>;
  splitConfig?: Maybe<SplitConfig>;
  splitConfigId?: Maybe<Scalars['String']>;
  status?: Maybe<PaymentStatus>;
  statusAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
  userPaymentProfile?: Maybe<UserPaymentProfile>;
  userPaymentProfileId?: Maybe<Scalars['String']>;
  userPaymentProfileSharedId: Scalars['String'];
};

export type PixPaymentOperation = Operation & {
  __typename?: 'PixPaymentOperation';
  balanceOperation: BalanceOperation;
  payable: Payable;
  payment: Payment;
  type: OperationType;
};

export type PixRefundOperation = Operation & {
  __typename?: 'PixRefundOperation';
  balanceOperation: BalanceOperation;
  payable: Payable;
  payment: Payment;
  refund: Refund;
  type: OperationType;
};

export type PlanConfig = {
  __typename?: 'PlanConfig';
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  features: PlanConfigFeatures;
  latest: Scalars['Boolean'];
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Organization>;
  sharedId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
};

export type PlanConfigFeatures = {
  __typename?: 'PlanConfigFeatures';
  certificate: CertificateFeatureConfig;
  checkout: FeatureConfig;
  course: FeatureConfig;
  directPayment: PlanFeatureDirectPayment;
  payment: PlanFeaturePayment;
  userPermission: FeatureConfig;
};

export type PlanConfigFeaturesInput = {
  certificate?: Maybe<CertificateFeatureConfigInput>;
  checkout?: Maybe<FeatureConfigInput>;
  course?: Maybe<FeatureConfigInput>;
  directPayment?: Maybe<PlanFeatureDirectPaymentInput>;
  payment?: Maybe<PlanFeaturePaymentInput>;
  userPermission?: Maybe<FeatureConfigInput>;
};

export type PlanConfigLogState = {
  __typename?: 'PlanConfigLogState';
  planConfig: PlanConfig;
};

export type PlanFeatureDirectPayment = {
  __typename?: 'PlanFeatureDirectPayment';
  enabled?: Maybe<Scalars['Boolean']>;
  onetime?: Maybe<FeatureConfig>;
  recurring?: Maybe<FeatureConfig>;
};

export type PlanFeatureDirectPaymentInput = {
  enabled?: Maybe<Scalars['Boolean']>;
  onetime?: Maybe<FeatureConfigInput>;
  recurring?: Maybe<FeatureConfigInput>;
};

export type PlanFeaturePayment = {
  __typename?: 'PlanFeaturePayment';
  anticipation?: Maybe<FeatureConfigWPaymentFee>;
  bankSlip?: Maybe<FeatureConfigWPaymentFee>;
  creditCard?: Maybe<FeatureConfigWPaymentFee>;
  enabled?: Maybe<Scalars['Boolean']>;
  money?: Maybe<FeatureConfigWPaymentFee>;
  pix?: Maybe<FeatureConfigWPaymentFee>;
  withdrawal?: Maybe<FeatureConfigWPaymentFee>;
};

export type PlanFeaturePaymentInput = {
  anticipation?: Maybe<FeatureConfigWPaymentFeeInput>;
  bankSlip?: Maybe<FeatureConfigWPaymentFeeInput>;
  creditCard?: Maybe<FeatureConfigWPaymentFeeInput>;
  enabled?: Maybe<Scalars['Boolean']>;
  money?: Maybe<FeatureConfigWPaymentFeeInput>;
  pix?: Maybe<FeatureConfigWPaymentFeeInput>;
  withdrawal?: Maybe<FeatureConfigWPaymentFeeInput>;
};

export type Policy = {
  __typename?: 'Policy';
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  logs: Array<Log>;
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  statements: Array<PolicyStatements>;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
  version: PolicyVersion;
};


export type PolicyLogsArgs = {
  roles?: Maybe<Array<LogTargetRole>>;
};

export type PolicyLogState = {
  __typename?: 'PolicyLogState';
  policy: Policy;
};

export type PolicyOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  name?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
  version?: Maybe<OrderByDirection>;
};

export enum PolicyStatementEffect {
  Allow = 'ALLOW',
  Deny = 'DENY'
}

export type PolicyStatements = {
  __typename?: 'PolicyStatements';
  _id: Scalars['ObjectId'];
  actions: Array<Scalars['String']>;
  effect: PolicyStatementEffect;
  resources: Array<Scalars['String']>;
};

export type PolicyStatementsInput = {
  actions: Array<Scalars['String']>;
  effect: PolicyStatementEffect;
  resources: Array<Scalars['String']>;
};

export enum PolicyVersion {
  V1 = 'V1'
}

export type Product = {
  _id: Scalars['ObjectId'];
  archivedAt?: Maybe<Scalars['DateTime']>;
  archivedBy?: Maybe<AdminUser>;
  archivedById?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<AdminUser>;
  createdById?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<AdminUser>;
  deletedById?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isBeingUsed?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Array<Metadata>>;
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  prices: Array<ProductPrice>;
  type: ProductType;
  unitLabel?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<AdminUser>;
  updatedById?: Maybe<Scalars['String']>;
};

export type ProductAccess = {
  accessExpirationRule?: Maybe<AccessExpirationRule>;
  type: ProductAccessType;
};

export type ProductAccessDiscriminatorInput = {
  cohortProductAccess?: Maybe<CohortProductAccessInput>;
  courseProductAccess?: Maybe<CourseProductAccessInput>;
  type: ProductAccessType;
};

export enum ProductAccessType {
  Cohort = 'COHORT',
  CourseAndRoom = 'COURSE_AND_ROOM'
}

export type ProductInvoiceItem = InvoiceItem & {
  __typename?: 'ProductInvoiceItem';
  amount?: Maybe<Scalars['Int']>;
  attachedInvoiceAccesses?: Maybe<Array<InvoiceAccess>>;
  product: Product;
  productId?: Maybe<Scalars['String']>;
  productPrice: Scalars['ObjectId'];
  quantity: Scalars['Int'];
  type: InvoiceItemType;
};

export type ProductInvoiceItemInput = {
  amount?: Maybe<Scalars['Int']>;
  productId: Scalars['String'];
  productPriceId: Scalars['String'];
  quantity: Scalars['Int'];
  type: InvoiceItemType;
};

export type ProductLogState = {
  __typename?: 'ProductLogState';
  product: Product;
};

export type ProductOrderByInput = {
  archivedAt?: Maybe<OrderByDirection>;
  createdAt?: Maybe<OrderByDirection>;
  description?: Maybe<OrderByDirection>;
  name?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type ProductPrice = {
  __typename?: 'ProductPrice';
  _id: Scalars['ObjectId'];
  archivedAt?: Maybe<Scalars['DateTime']>;
  archivedBy?: Maybe<AdminUser>;
  archivedById?: Maybe<Scalars['String']>;
  billingConfig: ProductPriceBillingConfig;
  createdAt: Scalars['DateTime'];
  currency: Currency;
  description?: Maybe<Scalars['String']>;
  isBeingUsed?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Array<Metadata>>;
  paymentConfig: ProductPricePaymentConfig;
  updatedAt: Scalars['DateTime'];
};

export type ProductPriceBillingConfig = {
  type: ProductPriceBillingType;
};

export type ProductPriceBillingConfigDiscriminatorInput = {
  adjustedProductPrice?: Maybe<AdjustedProductPriceInput>;
  graduatedProductPrice?: Maybe<GraduatedProductPriceInput>;
  packageProductPrice?: Maybe<PackageProductPriceInput>;
  perUnitProductPrice?: Maybe<PerUnitProductPriceInput>;
  type: ProductPriceBillingType;
  volumeProductPrice?: Maybe<VolumeProductPriceInput>;
};

export enum ProductPriceBillingType {
  Adjusted = 'ADJUSTED',
  Graduated = 'GRADUATED',
  Package = 'PACKAGE',
  PerUnit = 'PER_UNIT',
  Volume = 'VOLUME'
}

export type ProductPriceInput = {
  billingConfig: ProductPriceBillingConfigDiscriminatorInput;
  currency: Currency;
  description?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataInput>>;
  paymentConfig: ProductPricePaymentConfigDiscriminatorInput;
};

export type ProductPriceInterval = {
  __typename?: 'ProductPriceInterval';
  amount: Scalars['Int'];
  unit: TimeUnit;
};

export type ProductPriceIntervalInput = {
  amount: Scalars['Int'];
  unit: TimeUnit;
};

export type ProductPriceMethodInput = {
  archive?: Maybe<Scalars['Boolean']>;
  create?: Maybe<Scalars['Boolean']>;
  /** required on creation */
  creationPrice?: Maybe<ProductPriceInput>;
  delete?: Maybe<Scalars['Boolean']>;
  /** optional on creation */
  productPriceId?: Maybe<Scalars['String']>;
  unarchive?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  /** required on update */
  updatePrice?: Maybe<ProductPriceUpdateInput>;
};

export type ProductPricePaymentConfig = {
  type: ProductPricePaymentType;
};

export type ProductPricePaymentConfigDiscriminatorInput = {
  givenTimeProductPrice?: Maybe<GivenTimeProductPriceInput>;
  oneTimeProductPrice?: Maybe<OneTimeProductPriceInput>;
  recurringProductPrice?: Maybe<RecurringProductPriceInput>;
  type: ProductPricePaymentType;
};

export enum ProductPricePaymentType {
  GivenTime = 'GIVEN_TIME',
  OneTime = 'ONE_TIME',
  Recurring = 'RECURRING'
}

export type ProductPriceUpdateInput = {
  billingConfig?: Maybe<ProductPriceBillingConfigDiscriminatorInput>;
  currency?: Maybe<Currency>;
  description?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataInput>>;
  paymentConfig?: Maybe<ProductPricePaymentConfigDiscriminatorInput>;
};

export enum ProductType {
  Access = 'ACCESS',
  Other = 'OTHER'
}

export type ProductWhereInput = {
  and?: Maybe<Array<ProductWhereInput>>;
  archivedAt?: Maybe<DateFilterInput>;
  createdAt?: Maybe<DateFilterInput>;
  description?: Maybe<StringFilterInput>;
  name?: Maybe<StringFilterInput>;
  or?: Maybe<Array<ProductWhereInput>>;
  updatedAt?: Maybe<DateFilterInput>;
};

export type ProgressConstraint = Constraint & {
  __typename?: 'ProgressConstraint';
  chapterIds?: Maybe<Array<Scalars['String']>>;
  chapters?: Maybe<Array<Chapter>>;
  constraintType: ConstraintType;
  lessonIds?: Maybe<Array<Scalars['String']>>;
  lessons?: Maybe<Array<Lesson>>;
  type: ProgressConstraintType;
};

export type ProgressConstraintInput = {
  chapterIds?: Maybe<Array<Scalars['String']>>;
  lessonIds?: Maybe<Array<Scalars['String']>>;
  type: ProgressConstraintType;
};

export enum ProgressConstraintType {
  AfterCompletion = 'AFTER_COMPLETION'
}

export type PublicCancelInvoicePaymentLinkPaymentResponse = {
  __typename?: 'PublicCancelInvoicePaymentLinkPaymentResponse';
  invoicePaymentLink: InvoicePaymentLink;
  payment: Payment;
};

export type PublicCreateCheckoutPaymentResponse = {
  __typename?: 'PublicCreateCheckoutPaymentResponse';
  checkout: Checkout;
  payment: Payment;
};

export type PublicCreatePaymentFromInvoicePaymentLinkResponse = {
  __typename?: 'PublicCreatePaymentFromInvoicePaymentLinkResponse';
  invoice: Invoice;
  invoicePaymentLink: InvoicePaymentLink;
  payment: Payment;
};

export type Purchase = {
  __typename?: 'Purchase';
  _id: Scalars['ObjectId'];
  checkout: Checkout;
  checkoutId?: Maybe<Scalars['String']>;
  checkoutSharedId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<StudentUser>;
  createdById?: Maybe<Scalars['String']>;
  invoiceDiscountedAmount?: Maybe<Scalars['Int']>;
  invoiceDueAmount?: Maybe<Scalars['Int']>;
  invoiceItemsAmount?: Maybe<Scalars['Int']>;
  invoicePaidAmount?: Maybe<Scalars['Int']>;
  invoiceRefundedAmount?: Maybe<Scalars['Int']>;
  invoiceTotalAmount?: Maybe<Scalars['Int']>;
  organization: Organization;
  organizationId?: Maybe<Scalars['String']>;
  /** The latest purchase payment */
  payment: Payment;
  sharedCheckout?: Maybe<Checkout>;
  status: PurchaseStatus;
  studentUserId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<StudentUser>;
  updatedById?: Maybe<Scalars['String']>;
  user: StudentUser;
};

export type PurchaseLogState = {
  __typename?: 'PurchaseLogState';
  purchase: Purchase;
};

export type PurchaseOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  status?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export enum PurchaseStatus {
  Draft = 'DRAFT',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Late = 'LATE',
  Open = 'OPEN',
  Paid = 'PAID',
  PartiallyPaid = 'PARTIALLY_PAID',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  Refunded = 'REFUNDED',
  Refused = 'REFUSED',
  Void = 'VOID'
}

export type PurchaseStatusEnumFilterInput = {
  eq?: Maybe<PurchaseStatus>;
  exists?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<PurchaseStatus>>;
};

export type PurchaseWhereInput = {
  and?: Maybe<Array<PurchaseWhereInput>>;
  createdAt?: Maybe<DateFilterInput>;
  or?: Maybe<Array<PurchaseWhereInput>>;
  status?: Maybe<PurchaseStatusEnumFilterInput>;
  updatedAt?: Maybe<DateFilterInput>;
};

export type Query = {
  __typename?: 'Query';
  adminFetchAnticipation?: Maybe<Anticipation>;
  adminFetchAnticipations: PaginatedAnticipationResponse;
  adminFetchBank?: Maybe<Bank>;
  adminFetchBanks: PaginatedBankResponse;
  adminFetchCertificate?: Maybe<Certificate>;
  adminFetchCertificateTemplate?: Maybe<CertificateTemplate>;
  adminFetchCertificateTemplates: Array<CertificateTemplate>;
  adminFetchCertificates: PaginatedCertificateResponse;
  adminFetchChapter?: Maybe<Chapter>;
  adminFetchChapters: PaginatedChapterResponse;
  adminFetchCheckout?: Maybe<Checkout>;
  adminFetchCheckoutPurchaseSummary: FetchCheckoutPurchaseSummaryResponse;
  adminFetchCheckouts: PaginatedCheckoutResponse;
  adminFetchCourse?: Maybe<Course>;
  adminFetchCourses: PaginatedCourseResponse;
  adminFetchDenormalizedEnrolments: PaginatedDenormalizedEnrolmentResponse;
  adminFetchEnrolment?: Maybe<Enrolment>;
  adminFetchEnrolments: PaginatedEnrolmentResponse;
  adminFetchFile?: Maybe<FilestackS3File>;
  adminFetchFiles: PaginatedFileResponse;
  adminFetchGeneratingPaymentScheduleCount: FetchProcessingPaymentScheduleGenCountResponse;
  adminFetchInvoice?: Maybe<Invoice>;
  adminFetchInvoiceAccess?: Maybe<InvoiceAccess>;
  adminFetchInvoiceAccesses: PaginatedInvoiceAccessResponse;
  /** Index invoice accesses by product price */
  adminFetchInvoiceAccessesSummary: PaginatedInvoiceAccessSummaryResponse;
  adminFetchInvoicePaymentLink?: Maybe<InvoicePaymentLink>;
  adminFetchInvoicePaymentLinks: PaginatedInvoicePaymentLinkResponse;
  adminFetchInvoices: PaginatedInvoiceResponse;
  adminFetchLesson?: Maybe<Lesson>;
  adminFetchLessonTemplate?: Maybe<LessonTemplate>;
  adminFetchLessons: PaginatedLessonResponse;
  adminFetchLog?: Maybe<Log>;
  adminFetchLogs: PaginatedLogResponse;
  adminFetchMember?: Maybe<Member>;
  adminFetchMembers: PaginatedMemberResponse;
  adminFetchOrganizationCurrentDate: FetchOrganizationCurrentDateResponse;
  adminFetchOrganizations: PaginatedOrganizationResponse;
  adminFetchPayment?: Maybe<Payment>;
  adminFetchPaymentHistory?: Maybe<Array<PaymentHistoryOperation>>;
  adminFetchPaymentPayables?: Maybe<Array<Payable>>;
  adminFetchPaymentSchedule?: Maybe<PaymentSchedule>;
  adminFetchPaymentSchedules: PaginatedPaymentScheduleResponse;
  adminFetchPayments: PaginatedPaymentResponse;
  adminFetchPlanConfig?: Maybe<PlanConfig>;
  adminFetchPolicies: PaginatedPolicyResponse;
  adminFetchPolicy?: Maybe<Policy>;
  adminFetchProduct?: Maybe<Product>;
  adminFetchProducts: PaginatedProductResponse;
  adminFetchPurchase?: Maybe<Purchase>;
  adminFetchPurchases: PaginatedPurchaseResponse;
  adminFetchQuestionnaire?: Maybe<Questionnaire>;
  adminFetchQuestionnaireAnswer?: Maybe<UserQuestionnaireAnswer>;
  adminFetchQuestionnaireAnswers: PaginatedUserQuestionnaireAnswerResponse;
  adminFetchQuestionnaires: PaginatedQuestionnaireResponse;
  adminFetchRecipient?: Maybe<Recipient>;
  adminFetchRecipientAnticipationLimits: FetchRecipientAnticipationLimitsResponse;
  adminFetchRecipientBalance: FetchRecipientBalanceResponse;
  adminFetchRecipientBalanceOperations: FetchRecipientOperationsResponse;
  adminFetchRecipientBankAccount?: Maybe<BankAccount>;
  adminFetchRecipientBankAccounts: PaginatedBankAccountResponse;
  adminFetchRecipientFutureOperations: FetchRecipientOperationsResponse;
  adminFetchRecipientStatistics: FetchRecipientStatisticsResponse;
  adminFetchRecipients: PaginatedRecipientResponse;
  adminFetchRefunds?: Maybe<PaginatedRefundResponse>;
  adminFetchReport?: Maybe<Report>;
  adminFetchReports: PaginatedReportResponse;
  adminFetchRoom?: Maybe<Room>;
  adminFetchRooms: PaginatedRoomResponse;
  adminFetchSplitConfig?: Maybe<SplitConfig>;
  adminFetchSplitConfigs: PaginatedSplitConfigResponse;
  adminFetchStudent?: Maybe<StudentUser>;
  adminFetchStudents: PaginatedStudentUserResponse;
  adminFetchUserCard?: Maybe<Card>;
  adminFetchUserCards: PaginatedCardResponse;
  adminFetchUserPaymentProfile?: Maybe<UserPaymentProfile>;
  adminFetchUserPaymentProfiles: PaginatedUserPaymentProfileResponse;
  adminFetchUsersByPaymentProfiles: PaginatedStudentUserResponse;
  adminFetchWithdrawal?: Maybe<Withdrawal>;
  adminFetchWithdrawals: PaginatedWithdrawalResponse;
  adminUser: AdminUser;
  fetchCertificate?: Maybe<Certificate>;
  fetchOrganization: Organization;
  publicFetchCheckout?: Maybe<Checkout>;
  publicFetchInvoicePaymentLink?: Maybe<InvoicePaymentLink>;
  publicFetchInvoicePaymentLinkUserCards: PaginatedCardResponse;
  publicFetchStudentCheckoutPurchase?: Maybe<Purchase>;
  studentFetchCertificate?: Maybe<Certificate>;
  studentFetchCertificates: Array<Certificate>;
  studentFetchChapter?: Maybe<Chapter>;
  studentFetchChapters: PaginatedChapterResponse;
  studentFetchCourse?: Maybe<Course>;
  studentFetchCourseProgressData: UserProgressDataResponse;
  studentFetchCourseState?: Maybe<UserCourseState>;
  studentFetchCourseStates: PaginatedUserCourseStateResponse;
  studentFetchCourses: PaginatedCourseResponse;
  studentFetchDenormalizedEnrolments: PaginatedDenormalizedEnrolmentResponse;
  studentFetchEnrolment?: Maybe<Enrolment>;
  studentFetchEnrolments: PaginatedEnrolmentResponse;
  studentFetchFile?: Maybe<FilestackS3File>;
  studentFetchFiles: PaginatedFileResponse;
  studentFetchLesson?: Maybe<Lesson>;
  studentFetchLessons: PaginatedLessonResponse;
  studentFetchProgresses: PaginatedUserProgressResponse;
  studentFetchQuestionnaireAnswer?: Maybe<UserQuestionnaireAnswer>;
  studentFetchQuestionnaireAnswers: PaginatedUserQuestionnaireAnswerResponse;
  studentFetchRoom?: Maybe<Room>;
  studentFetchRooms: PaginatedRoomResponse;
  studentFetchUserCard?: Maybe<Card>;
  studentFetchUserCards: PaginatedCardResponse;
  studentFetchUserPaymentProfile?: Maybe<UserPaymentProfile>;
  studentFetchUserPaymentProfiles: PaginatedUserPaymentProfileResponse;
  studentUser: StudentUser;
};


export type QueryAdminFetchAnticipationArgs = {
  anticipationId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type QueryAdminFetchAnticipationsArgs = {
  anticipationIds?: Maybe<Array<Scalars['String']>>;
  bankAccountIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<AnticipationOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  recipientIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchBankArgs = {
  bankId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type QueryAdminFetchBanksArgs = {
  bankIds?: Maybe<Array<Scalars['String']>>;
  filterArgs?: Maybe<BankWhereInput>;
  orderBy?: Maybe<Array<BankOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<BankPagePaginationInput>;
};


export type QueryAdminFetchCertificateArgs = {
  certificateId?: Maybe<Scalars['String']>;
  certificateSharedId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
};


export type QueryAdminFetchCertificateTemplateArgs = {
  certificateTemplateId?: Maybe<Scalars['String']>;
  certificateTemplateSharedId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
};


export type QueryAdminFetchCertificateTemplatesArgs = {
  certificateTemplateIds?: Maybe<Array<Scalars['String']>>;
  certificateTemplateSharedIds?: Maybe<Array<Scalars['String']>>;
  latest?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<Array<CertificateTemplateOrderByInput>>;
  organizationId: Scalars['String'];
  userIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchCertificatesArgs = {
  certificateIds?: Maybe<Array<Scalars['String']>>;
  certificateSharedIds?: Maybe<Array<Scalars['String']>>;
  certificateTemplateIds?: Maybe<Array<Scalars['String']>>;
  certificateTemplateSharedIds?: Maybe<Array<Scalars['String']>>;
  courseIds?: Maybe<Array<Scalars['String']>>;
  latest?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<Array<CertificateOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  userIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchChapterArgs = {
  chapterId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type QueryAdminFetchChaptersArgs = {
  chapterIds?: Maybe<Array<Scalars['String']>>;
  courseIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<ChapterOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
};


export type QueryAdminFetchCheckoutArgs = {
  checkoutId?: Maybe<Scalars['String']>;
  checkoutSharedId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
};


export type QueryAdminFetchCheckoutPurchaseSummaryArgs = {
  checkoutId?: Maybe<Scalars['String']>;
  checkoutSharedId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
};


export type QueryAdminFetchCheckoutsArgs = {
  checkoutIds?: Maybe<Array<Scalars['String']>>;
  filterArgs?: Maybe<CheckoutWhereInput>;
  filterInputText?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Array<CheckoutOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  splitConfigIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchCourseArgs = {
  courseId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type QueryAdminFetchCoursesArgs = {
  courseIds?: Maybe<Array<Scalars['String']>>;
  filterArgs?: Maybe<CourseWhereInput>;
  filterInputText?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Array<CourseOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<CoursePaginationInput>;
};


export type QueryAdminFetchDenormalizedEnrolmentsArgs = {
  courseIds?: Maybe<Array<Scalars['String']>>;
  filterArgs?: Maybe<DenormalizedEnrolmentWhereInput>;
  orderBy?: Maybe<Array<DenormalizedEnrolmentOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  studentUserIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchEnrolmentArgs = {
  enrolmentId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type QueryAdminFetchEnrolmentsArgs = {
  courseIds?: Maybe<Array<Scalars['String']>>;
  enrolmentIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<EnrolmentOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  studentUserIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchFileArgs = {
  fileId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type QueryAdminFetchFilesArgs = {
  fileIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<FileOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
};


export type QueryAdminFetchGeneratingPaymentScheduleCountArgs = {
  invoiceId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  paymentScheduleSharedId?: Maybe<Scalars['String']>;
};


export type QueryAdminFetchInvoiceArgs = {
  invoiceId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type QueryAdminFetchInvoiceAccessArgs = {
  invoiceAccessId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type QueryAdminFetchInvoiceAccessesArgs = {
  filterArgs?: Maybe<InvoiceAccessWhereInput>;
  invoiceAccessIds?: Maybe<Array<Scalars['String']>>;
  invoiceIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<InvoiceAccessOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  productIds?: Maybe<Array<Scalars['String']>>;
  studentUserIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchInvoiceAccessesSummaryArgs = {
  filterArgs?: Maybe<InvoiceAccessWhereInput>;
  invoiceAccessIds?: Maybe<Array<Scalars['String']>>;
  invoiceIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<InvoiceAccessOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  productIds?: Maybe<Array<Scalars['String']>>;
  studentUserIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchInvoicePaymentLinkArgs = {
  invoicePaymentLinkId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type QueryAdminFetchInvoicePaymentLinksArgs = {
  filterArgs?: Maybe<InvoicePaymentLinkWhereInput>;
  invoiceIds?: Maybe<Array<Scalars['String']>>;
  invoicePaymentLinkIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<InvoicePaymentLinkOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
};


export type QueryAdminFetchInvoicesArgs = {
  filterArgs?: Maybe<InvoiceWhereInput>;
  invoiceIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<InvoiceOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
};


export type QueryAdminFetchLessonArgs = {
  lessonId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type QueryAdminFetchLessonTemplateArgs = {
  lessonTemplateId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type QueryAdminFetchLessonsArgs = {
  courseIds?: Maybe<Array<Scalars['String']>>;
  lessonIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<LessonOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
};


export type QueryAdminFetchLogArgs = {
  logId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type QueryAdminFetchLogsArgs = {
  filterArgs?: Maybe<LogWhereInput>;
  logIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<LogOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
};


export type QueryAdminFetchMemberArgs = {
  memberId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};


export type QueryAdminFetchMembersArgs = {
  filterInputText?: Maybe<Scalars['String']>;
  memberIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<MemberOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  userIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchOrganizationCurrentDateArgs = {
  organizationId?: Maybe<Scalars['String']>;
};


export type QueryAdminFetchOrganizationsArgs = {
  orderBy?: Maybe<Array<OrganizationOrderByInput>>;
  paginationArgs?: Maybe<PagePaginationInput>;
};


export type QueryAdminFetchPaymentArgs = {
  organizationId: Scalars['String'];
  paymentId: Scalars['String'];
};


export type QueryAdminFetchPaymentHistoryArgs = {
  organizationId: Scalars['String'];
  paymentId: Scalars['String'];
};


export type QueryAdminFetchPaymentPayablesArgs = {
  organizationId: Scalars['String'];
  paymentId: Scalars['String'];
};


export type QueryAdminFetchPaymentScheduleArgs = {
  organizationId: Scalars['String'];
  paymentScheduleId: Scalars['String'];
};


export type QueryAdminFetchPaymentSchedulesArgs = {
  filterArgs?: Maybe<PaymentScheduleWhereInput>;
  filterInputText?: Maybe<Scalars['String']>;
  invoiceIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<PaymentScheduleOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  paymentScheduleIds?: Maybe<Array<Scalars['String']>>;
  paymentScheduleSharedIds?: Maybe<Array<Scalars['String']>>;
  splitConfigIds?: Maybe<Array<Scalars['String']>>;
  userIds?: Maybe<Array<Scalars['String']>>;
  userPaymentProfileIds?: Maybe<Array<Scalars['String']>>;
  userPaymentProfileSharedIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchPaymentsArgs = {
  filterArgs?: Maybe<PaymentWhereInput>;
  filterInputText?: Maybe<Scalars['String']>;
  invoiceIds?: Maybe<Array<Scalars['String']>>;
  invoicePaymentLinkIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<PaymentOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  paymentIds?: Maybe<Array<Scalars['String']>>;
  paymentScheduleIds?: Maybe<Array<Scalars['String']>>;
  paymentScheduleSharedIds?: Maybe<Array<Scalars['String']>>;
  planConfigIds?: Maybe<Array<Scalars['String']>>;
  planConfigSharedIds?: Maybe<Array<Scalars['String']>>;
  splitConfigIds?: Maybe<Array<Scalars['String']>>;
  userIds?: Maybe<Array<Scalars['String']>>;
  userPaymentProfileIds?: Maybe<Array<Scalars['String']>>;
  userPaymentProfileSharedIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchPlanConfigArgs = {
  organizationId: Scalars['String'];
  planConfigId?: Maybe<Scalars['String']>;
};


export type QueryAdminFetchPoliciesArgs = {
  orderBy?: Maybe<Array<PolicyOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  policyIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchPolicyArgs = {
  organizationId: Scalars['String'];
  policyId: Scalars['String'];
};


export type QueryAdminFetchProductArgs = {
  organizationId: Scalars['String'];
  productId: Scalars['String'];
};


export type QueryAdminFetchProductsArgs = {
  filterArgs?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<Array<ProductOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  productIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchPurchaseArgs = {
  organizationId: Scalars['String'];
  purchaseId: Scalars['String'];
};


export type QueryAdminFetchPurchasesArgs = {
  checkoutSharedIds?: Maybe<Array<Scalars['String']>>;
  filterArgs?: Maybe<PurchaseWhereInput>;
  filterInputText?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Array<PurchaseOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  purchaseIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchQuestionnaireArgs = {
  organizationId: Scalars['String'];
  questionnaireId?: Maybe<Scalars['String']>;
  questionnaireSharedId?: Maybe<Scalars['String']>;
};


export type QueryAdminFetchQuestionnaireAnswerArgs = {
  organizationId: Scalars['String'];
  userQuestionnaireAnswerId: Scalars['String'];
};


export type QueryAdminFetchQuestionnaireAnswersArgs = {
  courseIds?: Maybe<Array<Scalars['String']>>;
  latest?: Maybe<Scalars['Boolean']>;
  lessonIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<UserQuestionnaireAnswerOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  questionnaireIds?: Maybe<Array<Scalars['String']>>;
  userIds?: Maybe<Array<Scalars['String']>>;
  userQuestionnaireAnswerIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchQuestionnairesArgs = {
  latest?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<Array<QuestionnaireOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  questionnaireIds?: Maybe<Array<Scalars['String']>>;
  questionnaireSharedIds?: Maybe<Array<Scalars['String']>>;
  questionnaireType?: Maybe<QuestionnaireType>;
};


export type QueryAdminFetchRecipientArgs = {
  organizationId: Scalars['String'];
  recipientId: Scalars['String'];
};


export type QueryAdminFetchRecipientAnticipationLimitsArgs = {
  organizationId: Scalars['String'];
  paymentDate?: Maybe<Scalars['DateTime']>;
  recipientId: Scalars['String'];
  timeframe: AnticipationTimeframe;
};


export type QueryAdminFetchRecipientBalanceArgs = {
  organizationId: Scalars['String'];
  recipientId: Scalars['String'];
};


export type QueryAdminFetchRecipientBalanceOperationsArgs = {
  endDate?: Maybe<Scalars['DateTime']>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  recipientId: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
};


export type QueryAdminFetchRecipientBankAccountArgs = {
  bankAccountId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type QueryAdminFetchRecipientBankAccountsArgs = {
  bankAccountIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<BankAccountOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  recipientIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchRecipientFutureOperationsArgs = {
  endDate?: Maybe<Scalars['DateTime']>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  recipientId?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
};


export type QueryAdminFetchRecipientStatisticsArgs = {
  organizationId: Scalars['String'];
  recipientId: Scalars['String'];
};


export type QueryAdminFetchRecipientsArgs = {
  filterArgs?: Maybe<RecipientWhereInput>;
  orderBy?: Maybe<Array<RecipientOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  recipientIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchRefundsArgs = {
  orderBy?: Maybe<Array<RefundOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  paymentIds?: Maybe<Array<Scalars['String']>>;
  refundIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchReportArgs = {
  organizationId: Scalars['String'];
  reportId: Scalars['String'];
};


export type QueryAdminFetchReportsArgs = {
  orderBy?: Maybe<Array<ReportOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  reportIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchRoomArgs = {
  organizationId: Scalars['String'];
  roomId: Scalars['String'];
};


export type QueryAdminFetchRoomsArgs = {
  courseIds?: Maybe<Array<Scalars['String']>>;
  filterArgs?: Maybe<RoomWhereInput>;
  orderBy?: Maybe<Array<RoomOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  roomIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchSplitConfigArgs = {
  organizationId: Scalars['String'];
  splitConfigId: Scalars['String'];
};


export type QueryAdminFetchSplitConfigsArgs = {
  orderBy?: Maybe<Array<SplitConfigOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  splitConfigIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchStudentArgs = {
  email?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  studentUserId?: Maybe<Scalars['String']>;
};


export type QueryAdminFetchStudentsArgs = {
  filterArgs?: Maybe<StudentUserWhereInput>;
  orderBy?: Maybe<Array<StudentUserOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  studentUserIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchUserCardArgs = {
  cardId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type QueryAdminFetchUserCardsArgs = {
  cardIds?: Maybe<Array<Scalars['String']>>;
  filterArgs?: Maybe<CardWhereInput>;
  orderBy?: Maybe<Array<CardOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  studentUserIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchUserPaymentProfileArgs = {
  organizationId: Scalars['String'];
  userPaymentProfileId?: Maybe<Scalars['String']>;
  userPaymentProfileSharedId?: Maybe<Scalars['String']>;
};


export type QueryAdminFetchUserPaymentProfilesArgs = {
  filterArgs?: Maybe<UserPaymentProfileWhereInput>;
  orderBy?: Maybe<Array<UserPaymentProfileOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  studentUserIds?: Maybe<Array<Scalars['String']>>;
  userPaymentProfileIds?: Maybe<Array<Scalars['String']>>;
  userPaymentProfileSharedIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryAdminFetchUsersByPaymentProfilesArgs = {
  filterInputText?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Array<StudentUserOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
};


export type QueryAdminFetchWithdrawalArgs = {
  organizationId: Scalars['String'];
  withdrawalId: Scalars['String'];
};


export type QueryAdminFetchWithdrawalsArgs = {
  bankAccountIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<WithdrawalOrderByInput>>;
  organizationId: Scalars['String'];
  paginationArgs?: Maybe<PagePaginationInput>;
  recipientIds?: Maybe<Array<Scalars['String']>>;
  withdrawalIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryFetchCertificateArgs = {
  certificateId?: Maybe<Scalars['String']>;
  certificateSharedId?: Maybe<Scalars['String']>;
};


export type QueryFetchOrganizationArgs = {
  hostname?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
};


export type QueryPublicFetchCheckoutArgs = {
  checkoutSharedId: Scalars['String'];
};


export type QueryPublicFetchInvoicePaymentLinkArgs = {
  accessToken: Scalars['String'];
};


export type QueryPublicFetchInvoicePaymentLinkUserCardsArgs = {
  accessToken: Scalars['String'];
  orderBy?: Maybe<Array<CardOrderByInput>>;
  paginationArgs?: Maybe<PagePaginationInput>;
};


export type QueryPublicFetchStudentCheckoutPurchaseArgs = {
  checkoutSharedId: Scalars['String'];
  studentUserEmail?: Maybe<Scalars['String']>;
  studentUserId?: Maybe<Scalars['String']>;
};


export type QueryStudentFetchCertificateArgs = {
  certificateId?: Maybe<Scalars['String']>;
  certificateSharedId?: Maybe<Scalars['String']>;
};


export type QueryStudentFetchCertificatesArgs = {
  certificateSharedIds?: Maybe<Array<Scalars['String']>>;
  certificateTemplateIds?: Maybe<Array<Scalars['String']>>;
  certificateTemplateSharedIds?: Maybe<Array<Scalars['String']>>;
  courseIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<CertificateOrderByInput>>;
};


export type QueryStudentFetchChapterArgs = {
  chapterId: Scalars['String'];
};


export type QueryStudentFetchChaptersArgs = {
  chapterIds?: Maybe<Array<Scalars['String']>>;
  courseIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<ChapterOrderByInput>>;
  paginationArgs?: Maybe<PagePaginationInput>;
};


export type QueryStudentFetchCourseArgs = {
  courseId: Scalars['String'];
};


export type QueryStudentFetchCourseProgressDataArgs = {
  courseId: Scalars['String'];
};


export type QueryStudentFetchCourseStateArgs = {
  courseId: Scalars['String'];
};


export type QueryStudentFetchCourseStatesArgs = {
  courseIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  paginationArgs?: Maybe<PagePaginationInput>;
};


export type QueryStudentFetchCoursesArgs = {
  courseIds?: Maybe<Array<Scalars['String']>>;
  filterArgs?: Maybe<CourseWhereInput>;
  orderBy?: Maybe<Array<CourseOrderByInput>>;
  paginationArgs?: Maybe<CoursePaginationInput>;
};


export type QueryStudentFetchDenormalizedEnrolmentsArgs = {
  courseIds?: Maybe<Array<Scalars['String']>>;
  filterArgs?: Maybe<DenormalizedEnrolmentWhereInput>;
  orderBy?: Maybe<Array<DenormalizedEnrolmentOrderByInput>>;
  paginationArgs?: Maybe<PagePaginationInput>;
  roomIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryStudentFetchEnrolmentArgs = {
  enrolmentId: Scalars['String'];
};


export type QueryStudentFetchEnrolmentsArgs = {
  courseIds?: Maybe<Array<Scalars['String']>>;
  enrolmentIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<EnrolmentOrderByInput>>;
  paginationArgs?: Maybe<PagePaginationInput>;
  roomIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryStudentFetchFileArgs = {
  fileId: Scalars['String'];
};


export type QueryStudentFetchFilesArgs = {
  fileIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<FileOrderByInput>>;
  paginationArgs?: Maybe<PagePaginationInput>;
};


export type QueryStudentFetchLessonArgs = {
  lessonId: Scalars['String'];
};


export type QueryStudentFetchLessonsArgs = {
  courseIds?: Maybe<Array<Scalars['String']>>;
  lessonIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<LessonOrderByInput>>;
};


export type QueryStudentFetchProgressesArgs = {
  courseIds?: Maybe<Array<Scalars['String']>>;
  lessonIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  paginationArgs?: Maybe<UserProgressPaginationInput>;
};


export type QueryStudentFetchQuestionnaireAnswerArgs = {
  courseId?: Maybe<Scalars['String']>;
  lessonId?: Maybe<Scalars['String']>;
  questionnaireId?: Maybe<Scalars['String']>;
  questionnaireSharedId?: Maybe<Scalars['String']>;
  userQuestionnaireAnswerId?: Maybe<Scalars['String']>;
};


export type QueryStudentFetchQuestionnaireAnswersArgs = {
  courseIds?: Maybe<Array<Scalars['String']>>;
  lessonIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<UserQuestionnaireAnswerOrderByInput>>;
  paginationArgs?: Maybe<PagePaginationInput>;
  questionnaireIds?: Maybe<Array<Scalars['String']>>;
  userQuestionnaireAnswerIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryStudentFetchRoomArgs = {
  roomId: Scalars['String'];
};


export type QueryStudentFetchRoomsArgs = {
  courseIds?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<RoomOrderByInput>>;
  paginationArgs?: Maybe<PagePaginationInput>;
  roomIds?: Maybe<Array<Scalars['String']>>;
};


export type QueryStudentFetchUserCardArgs = {
  cardId: Scalars['String'];
};


export type QueryStudentFetchUserCardsArgs = {
  cardIds?: Maybe<Array<Scalars['String']>>;
  filterArgs?: Maybe<CardWhereInput>;
  orderBy?: Maybe<Array<CardOrderByInput>>;
  paginationArgs?: Maybe<PagePaginationInput>;
};


export type QueryStudentFetchUserPaymentProfileArgs = {
  userPaymentProfileId?: Maybe<Scalars['String']>;
  userPaymentProfileSharedId?: Maybe<Scalars['String']>;
};


export type QueryStudentFetchUserPaymentProfilesArgs = {
  filterArgs?: Maybe<UserPaymentProfileWhereInput>;
  orderBy?: Maybe<Array<UserPaymentProfileOrderByInput>>;
  paginationArgs?: Maybe<PagePaginationInput>;
  userPaymentProfileIds?: Maybe<Array<Scalars['String']>>;
  userPaymentProfileSharedIds?: Maybe<Array<Scalars['String']>>;
};

export type Question = {
  _id: Scalars['ObjectId'];
  description?: Maybe<Scalars['String']>;
  required: Scalars['Boolean'];
  showCorrectAnswer: Scalars['Boolean'];
  title: Scalars['String'];
  type: QuestionType;
};

export type QuestionInput = {
  questionMultipleChoice?: Maybe<QuestionMultipleChoiceInput>;
  questionSingleChoice?: Maybe<QuestionSingleChoiceInput>;
  questionText?: Maybe<QuestionTextInput>;
  questionTrueOrFalse?: Maybe<QuestionTrueOrFalseInput>;
  questionType: QuestionType;
};

export type QuestionMultipleChoice = Question & {
  __typename?: 'QuestionMultipleChoice';
  _id: Scalars['ObjectId'];
  correctAnswerFeedback?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  options: Array<Option>;
  randomizeOptions: Scalars['Boolean'];
  required: Scalars['Boolean'];
  showCorrectAnswer: Scalars['Boolean'];
  title: Scalars['String'];
  type: QuestionType;
  weight?: Maybe<Scalars['Float']>;
  wrongAnswerFeedback?: Maybe<Scalars['String']>;
};

export type QuestionMultipleChoiceInput = {
  correctAnswerFeedback?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  options: Array<OptionInput>;
  randomizeOptions?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  showCorrectAnswer?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  type: QuestionType;
  weight?: Maybe<Scalars['Float']>;
  wrongAnswerFeedback?: Maybe<Scalars['String']>;
};

export type QuestionSingleChoice = Question & {
  __typename?: 'QuestionSingleChoice';
  _id: Scalars['ObjectId'];
  correctAnswerFeedback?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  options: Array<Option>;
  randomizeOptions: Scalars['Boolean'];
  required: Scalars['Boolean'];
  showCorrectAnswer: Scalars['Boolean'];
  title: Scalars['String'];
  type: QuestionType;
  weight?: Maybe<Scalars['Float']>;
  wrongAnswerFeedback?: Maybe<Scalars['String']>;
};

export type QuestionSingleChoiceInput = {
  correctAnswerFeedback?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  options: Array<OptionInput>;
  randomizeOptions?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  showCorrectAnswer?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  type: QuestionType;
  weight?: Maybe<Scalars['Float']>;
  wrongAnswerFeedback?: Maybe<Scalars['String']>;
};

export type QuestionText = Question & {
  __typename?: 'QuestionText';
  _id: Scalars['ObjectId'];
  description?: Maybe<Scalars['String']>;
  feedbackAfterSubmit?: Maybe<Scalars['String']>;
  required: Scalars['Boolean'];
  showCorrectAnswer: Scalars['Boolean'];
  title: Scalars['String'];
  type: QuestionType;
};

export type QuestionTextInput = {
  description?: Maybe<Scalars['String']>;
  feedbackAfterSubmit?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  showCorrectAnswer?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  type: QuestionType;
};

export type QuestionTrueOrFalse = Question & {
  __typename?: 'QuestionTrueOrFalse';
  _id: Scalars['ObjectId'];
  correctAnswerFeedback?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  options: Array<Option>;
  required: Scalars['Boolean'];
  showCorrectAnswer: Scalars['Boolean'];
  title: Scalars['String'];
  type: QuestionType;
  weight?: Maybe<Scalars['Float']>;
  wrongAnswerFeedback?: Maybe<Scalars['String']>;
};

export type QuestionTrueOrFalseInput = {
  correctAnswerFeedback?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  options: Array<OptionInput>;
  required?: Maybe<Scalars['Boolean']>;
  showCorrectAnswer?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  type: QuestionType;
  weight?: Maybe<Scalars['Float']>;
  wrongAnswerFeedback?: Maybe<Scalars['String']>;
};

export enum QuestionType {
  MultipleChoice = 'MULTIPLE_CHOICE',
  SingleChoice = 'SINGLE_CHOICE',
  Text = 'TEXT',
  TrueOrFalse = 'TRUE_OR_FALSE'
}

export type Questionnaire = {
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  latest: Scalars['Boolean'];
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  questions: Array<Question>;
  sharedId: Scalars['String'];
  type: QuestionnaireType;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
};

export type QuestionnaireAnswersV1Report = EntityCommonFieldsInterface & Report & {
  __typename?: 'QuestionnaireAnswersV1Report';
  _id: Scalars['ObjectId'];
  courses: Array<Course>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById: Scalars['String'];
  files?: Maybe<Array<File>>;
  generatedAt?: Maybe<Scalars['DateTime']>;
  organization: Organization;
  organizationId: Scalars['String'];
  status: ReportStatus;
  students: Array<StudentUser>;
  title?: Maybe<Scalars['String']>;
  type: ReportType;
  updatedAt: Scalars['DateTime'];
};

export type QuestionnaireContentBlockV1 = ContentBlock & {
  __typename?: 'QuestionnaireContentBlockV1';
  _id: Scalars['ObjectId'];
  component: ContentBlockComponentType;
  questionnaire?: Maybe<Questionnaire>;
  questionnaireSharedId?: Maybe<Scalars['String']>;
  referencedFileIds: Array<Scalars['String']>;
  referencedFiles?: Maybe<Array<FilestackS3File>>;
};

export type QuestionnaireContentBlockV1Input = {
  component: ContentBlockComponentType;
  questionnaireSharedId: Scalars['String'];
  referencedFiles?: Maybe<Array<Scalars['String']>>;
};

export type QuestionnaireExam = EntityCommonFieldsInterface & Questionnaire & {
  __typename?: 'QuestionnaireExam';
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  latest: Scalars['Boolean'];
  maxRetryAmount?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  passingGrade?: Maybe<QuestionnairePassingGrade>;
  questions: Array<Question>;
  randomizeQuestions: Scalars['Boolean'];
  sharedId: Scalars['String'];
  timeLimit?: Maybe<Scalars['Float']>;
  type: QuestionnaireType;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
};

export type QuestionnaireOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  name?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type QuestionnairePassingGrade = {
  __typename?: 'QuestionnairePassingGrade';
  _id: Scalars['ObjectId'];
  percentage?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** Passing grade can either be percentage or weight based, but not both at the same time. */
export type QuestionnairePassingGradeInput = {
  /** max: 100 */
  percentage?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type QuestionnaireQuiz = EntityCommonFieldsInterface & Questionnaire & {
  __typename?: 'QuestionnaireQuiz';
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  latest: Scalars['Boolean'];
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  passingGrade?: Maybe<QuestionnairePassingGrade>;
  questions: Array<Question>;
  sharedId: Scalars['String'];
  type: QuestionnaireType;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
};

export type QuestionnaireSurvey = EntityCommonFieldsInterface & Questionnaire & {
  __typename?: 'QuestionnaireSurvey';
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  latest: Scalars['Boolean'];
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  questions: Array<Question>;
  sharedId: Scalars['String'];
  type: QuestionnaireType;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
};

export enum QuestionnaireType {
  Exam = 'EXAM',
  Quiz = 'QUIZ',
  Survey = 'SURVEY'
}

export type Recipient = {
  __typename?: 'Recipient';
  _id: Scalars['ObjectId'];
  backgroundCheck: RecipientBackgroundCheck;
  bankAccounts?: Maybe<Array<BankAccount>>;
  country: CountryIsoCode;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  /** legal name */
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  pagarmeExternalId?: Maybe<Scalars['String']>;
  status: RecipientStatus;
  statusAt: Scalars['DateTime'];
  stripeExternalId?: Maybe<Scalars['String']>;
  taxIds?: Maybe<Array<TaxId>>;
  type: LegalPersonType;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
};

export enum RecipientBackgroundCheck {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type RecipientLogState = {
  __typename?: 'RecipientLogState';
  recipient: Recipient;
};

export type RecipientOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  name?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export enum RecipientStatus {
  Active = 'ACTIVE',
  Affiliation = 'AFFILIATION',
  Blocked = 'BLOCKED',
  Inactive = 'INACTIVE',
  Refused = 'REFUSED',
  Registration = 'REGISTRATION',
  Suspended = 'SUSPENDED'
}

export type RecipientWhereInput = {
  and?: Maybe<Array<RecipientWhereInput>>;
  createdAt?: Maybe<DateFilterInput>;
  name?: Maybe<StringFilterInput>;
  or?: Maybe<Array<RecipientWhereInput>>;
  updatedAt?: Maybe<DateFilterInput>;
};

export type RecurringProductPrice = ProductPricePaymentConfig & {
  __typename?: 'RecurringProductPrice';
  interval: ProductPriceInterval;
  type: ProductPricePaymentType;
};

export type RecurringProductPriceInput = {
  interval: ProductPriceIntervalInput;
  type: ProductPricePaymentType;
};

export type Refund = {
  __typename?: 'Refund';
  _id: Scalars['ObjectId'];
  amount: Scalars['Float'];
  bankAccount?: Maybe<RefundBankAccount>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  currency: Currency;
  description?: Maybe<Scalars['String']>;
  dispute?: Maybe<Dispute>;
  disputeId?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  pagarmeExternalId?: Maybe<Scalars['String']>;
  payment?: Maybe<Payment>;
  paymentId?: Maybe<Scalars['String']>;
  reason: RefundReason;
  status: RefundStatus;
  updatedAt: Scalars['DateTime'];
};

export type RefundBankAccount = {
  __typename?: 'RefundBankAccount';
  accountDigit: Scalars['String'];
  accountNumber: Scalars['String'];
  accountType: BankAccountType;
  bankId: Scalars['String'];
  branchDigit?: Maybe<Scalars['String']>;
  branchNumber: Scalars['String'];
  holderName: Scalars['String'];
  taxId: TaxId;
};

export type RefundLogState = {
  __typename?: 'RefundLogState';
  refund: Refund;
};

export type RefundOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type RefundPaymentBankAccountInput = {
  accountDigit: Scalars['String'];
  accountNumber: Scalars['String'];
  accountType: BankAccountType;
  bankId: Scalars['String'];
  branchDigit?: Maybe<Scalars['String']>;
  branchNumber: Scalars['String'];
  holderName: Scalars['String'];
  taxId: TaxIdInput;
};

export type RefundPaymentResponse = {
  __typename?: 'RefundPaymentResponse';
  payment: Payment;
  refund: Refund;
};

export enum RefundReason {
  Duplicate = 'DUPLICATE',
  Fraudulent = 'FRAUDULENT',
  Other = 'OTHER',
  RequestedByCustomer = 'REQUESTED_BY_CUSTOMER'
}

export enum RefundStatus {
  Canceled = 'CANCELED',
  Failed = 'FAILED',
  Paid = 'PAID',
  Pending = 'PENDING'
}

export type Report = {
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById: Scalars['String'];
  files?: Maybe<Array<File>>;
  generatedAt?: Maybe<Scalars['DateTime']>;
  organization: Organization;
  organizationId: Scalars['String'];
  status: ReportStatus;
  title?: Maybe<Scalars['String']>;
  type: ReportType;
  updatedAt: Scalars['DateTime'];
};

export type ReportOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  status?: Maybe<OrderByDirection>;
  title?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export enum ReportStatus {
  Empty = 'EMPTY',
  Fail = 'FAIL',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export enum ReportType {
  QuestionnaireAnswersV1 = 'QUESTIONNAIRE_ANSWERS_V1',
  UsersProgressV1 = 'USERS_PROGRESS_V1'
}

export type RetryPaymentScheduleResponse = {
  __typename?: 'RetryPaymentScheduleResponse';
  payment: Payment;
  paymentSchedule: PaymentSchedule;
};

export type Room = {
  __typename?: 'Room';
  _id: Scalars['ObjectId'];
  course: Course;
  courseId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdBy: User;
  createdById: Scalars['String'];
  expirationRule?: Maybe<DateConstraint>;
  liberationRule?: Maybe<DateConstraint>;
  name: Scalars['String'];
  organization: Organization;
  organizationId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
};

export type RoomOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  name?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type RoomWhereInput = {
  and?: Maybe<Array<RoomWhereInput>>;
  createdAt?: Maybe<DateFilterInput>;
  name?: Maybe<StringFilterInput>;
  or?: Maybe<Array<RoomWhereInput>>;
  updatedAt?: Maybe<DateFilterInput>;
};

/** Type representing the user session */
export type Session = {
  __typename?: 'Session';
  _id: Scalars['ObjectId'];
  active: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  expiresAt: Scalars['DateTime'];
  ip: Scalars['String'];
  magicToken?: Maybe<MagicToken>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userAgent: Scalars['String'];
  userId: Scalars['ObjectId'];
};

export type SimulateAnticipationResponse = {
  __typename?: 'SimulateAnticipationResponse';
  amount: Scalars['Int'];
  anticipationFee: Scalars['Int'];
  fee: Scalars['Int'];
  paymentDate: Scalars['DateTime'];
  timeframe: AnticipationTimeframe;
};

export type SplitConfig = {
  __typename?: 'SplitConfig';
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  /** only specified when config has an absolute rule */
  currency?: Maybe<Currency>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organization: Organization;
  organizationId?: Maybe<Scalars['String']>;
  rules: Array<SplitRule>;
  updatedAt: Scalars['DateTime'];
};

export type SplitConfigLogState = {
  __typename?: 'SplitConfigLogState';
  splitConfig: SplitConfig;
};

export type SplitConfigOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  name?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type SplitRule = {
  __typename?: 'SplitRule';
  amount?: Maybe<Scalars['Float']>;
  ceiling?: Maybe<Scalars['Float']>;
  floor?: Maybe<Scalars['Float']>;
  getsRemainder?: Maybe<Scalars['Boolean']>;
  /** value from 0 to 1 */
  percentage?: Maybe<Scalars['Float']>;
  recipient?: Maybe<Recipient>;
  recipientId?: Maybe<Scalars['String']>;
  responsibleForChargeback?: Maybe<Scalars['Boolean']>;
  responsibleForRefund?: Maybe<Scalars['Boolean']>;
  type: SplitRuleType;
};

export type SplitRuleInput = {
  amount?: Maybe<Scalars['Float']>;
  ceiling?: Maybe<Scalars['Float']>;
  floor?: Maybe<Scalars['Float']>;
  getsRemainder?: Maybe<Scalars['Boolean']>;
  /** value from 0 to 1 */
  percentage?: Maybe<Scalars['Float']>;
  recipientId: Scalars['String'];
  responsibleForChargeback?: Maybe<Scalars['Boolean']>;
  responsibleForRefund?: Maybe<Scalars['Boolean']>;
  type: SplitRuleType;
};

export enum SplitRuleType {
  Absolute = 'ABSOLUTE',
  Relative = 'RELATIVE'
}

export type SpreadFee = {
  __typename?: 'SpreadFee';
  amount?: Maybe<Scalars['Float']>;
  amounts?: Maybe<Array<Scalars['Float']>>;
};

export type SpreadFeeInput = {
  /** max: 1 */
  amount?: Maybe<Scalars['Float']>;
  /** max: 1 */
  amounts?: Maybe<Array<Scalars['Float']>>;
};

export type StringFilterInput = {
  eq?: Maybe<Scalars['String']>;
  exists?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Scalars['String']>>;
  options?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
};

export type StudentCreateCertificatePayloadInput = {
  studentName?: Maybe<Scalars['String']>;
};

/** Type representing the student user */
export type StudentUser = {
  __typename?: 'StudentUser';
  _id: Scalars['ObjectId'];
  activeEnrolsCount?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  definePasswordNextAccess: Scalars['Boolean'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  lastAccessAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  organization: Organization;
  organizationId: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberCountry?: Maybe<CountryIsoCode>;
  roles?: Maybe<Array<StudentUserRole>>;
  totalPaidAmount?: Maybe<Scalars['Int']>;
  type: UserType;
  updatedAt: Scalars['DateTime'];
};

export type StudentUserAuthResponse = {
  __typename?: 'StudentUserAuthResponse';
  session: Session;
  sessionToken: Scalars['String'];
  user: StudentUser;
};

export type StudentUserOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  email?: Maybe<OrderByDirection>;
  name?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export enum StudentUserRole {
  Payer = 'PAYER',
  Student = 'STUDENT'
}

export type StudentUserRoleArrayFilterInput = {
  all?: Maybe<Array<StudentUserRole>>;
  in?: Maybe<Array<StudentUserRole>>;
  size?: Maybe<Scalars['Float']>;
};

export type StudentUserWhereInput = {
  and?: Maybe<Array<UserWhereInput>>;
  createdAt?: Maybe<DateFilterInput>;
  email?: Maybe<StringFilterInput>;
  name?: Maybe<StringFilterInput>;
  or?: Maybe<Array<UserWhereInput>>;
  roles?: Maybe<StudentUserRoleArrayFilterInput>;
  updatedAt?: Maybe<DateFilterInput>;
};

export type TaxId = {
  __typename?: 'TaxId';
  country: CountryIsoCode;
  type: TaxIdType;
  value: Scalars['String'];
};

export type TaxIdInput = {
  country: CountryIsoCode;
  type: TaxIdType;
  value: Scalars['String'];
};

export enum TaxIdType {
  AeTrn = 'AE_TRN',
  AuAbn = 'AU_ABN',
  BrCnpj = 'BR_CNPJ',
  BrCpf = 'BR_CPF',
  CaBn = 'CA_BN',
  CaGstHst = 'CA_GST_HST',
  CaPstBc = 'CA_PST_BC',
  CaPstMb = 'CA_PST_MB',
  CaPstSk = 'CA_PST_SK',
  CaQst = 'CA_QST',
  ChVat = 'CH_VAT',
  ClTin = 'CL_TIN',
  EsCif = 'ES_CIF',
  EuVat = 'EU_VAT',
  GbVat = 'GB_VAT',
  HkBr = 'HK_BR',
  IdNpwp = 'ID_NPWP',
  IlVat = 'IL_VAT',
  InGst = 'IN_GST',
  JpCn = 'JP_CN',
  JpRn = 'JP_RN',
  KrBrn = 'KR_BRN',
  LiUid = 'LI_UID',
  MxRfc = 'MX_RFC',
  MyFrp = 'MY_FRP',
  MyItn = 'MY_ITN',
  MySst = 'MY_SST',
  NoVat = 'NO_VAT',
  NzGst = 'NZ_GST',
  RuInn = 'RU_INN',
  RuKpp = 'RU_KPP',
  SaVat = 'SA_VAT',
  SgGst = 'SG_GST',
  SgUen = 'SG_UEN',
  ThVat = 'TH_VAT',
  TwVat = 'TW_VAT',
  UsEin = 'US_EIN',
  ZaVat = 'ZA_VAT'
}

export type TextContentBlockV1 = ContentBlock & {
  __typename?: 'TextContentBlockV1';
  _id: Scalars['ObjectId'];
  component: ContentBlockComponentType;
  referencedFileIds: Array<Scalars['String']>;
  referencedFiles?: Maybe<Array<FilestackS3File>>;
  text: Scalars['String'];
};

export type TextContentBlockV1Input = {
  component: ContentBlockComponentType;
  referencedFiles?: Maybe<Array<Scalars['String']>>;
  text: Scalars['String'];
};

export type Tier = {
  __typename?: 'Tier';
  flatAmount?: Maybe<Scalars['Float']>;
  unitAmount: Scalars['Float'];
  upTo?: Maybe<Scalars['Float']>;
};

export type TierInput = {
  flatAmount?: Maybe<Scalars['Float']>;
  unitAmount: Scalars['Float'];
  upTo?: Maybe<Scalars['Float']>;
};

export enum TimeUnit {
  Day = 'DAY',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

export type TransferPaymentOperation = Operation & {
  __typename?: 'TransferPaymentOperation';
  balanceOperation: BalanceOperation;
  type: OperationType;
  withdrawal: Withdrawal;
};

export type TransferRefundOperation = Operation & {
  __typename?: 'TransferRefundOperation';
  balanceOperation: BalanceOperation;
  type: OperationType;
  withdrawal: Withdrawal;
};

export type UnarchiveProductPriceLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UnarchiveProductPriceLog';
  _id: Scalars['ObjectId'];
  after: ProductLogState;
  before: ProductLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UnknownOperation = Operation & {
  __typename?: 'UnknownOperation';
  balanceOperation: BalanceOperation;
  type: OperationType;
};

export type UpdateAnticipationStatusLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdateAnticipationStatusLog';
  _id: Scalars['ObjectId'];
  after: AnticipationLogState;
  before: AnticipationLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdateBankAccountLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdateBankAccountLog';
  _id: Scalars['ObjectId'];
  after: BankAccountLogState;
  before: BankAccountLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdateCertificateLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdateCertificateLog';
  _id: Scalars['ObjectId'];
  after: CertificateLogState;
  before: CertificateLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdateCheckoutLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdateCheckoutLog';
  _id: Scalars['ObjectId'];
  after: CheckoutLogState;
  before: CheckoutLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdateImportLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdateImportLog';
  _id: Scalars['ObjectId'];
  after: ImportLogState;
  before: ImportLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdateInvoiceAccessLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdateInvoiceAccessLog';
  _id: Scalars['ObjectId'];
  after: InvoiceAccessLogState;
  before: InvoiceAccessLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdateInvoiceDiscountLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdateInvoiceDiscountLog';
  _id: Scalars['ObjectId'];
  after: InvoiceLogState;
  before: InvoiceLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdateInvoiceLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdateInvoiceLog';
  _id: Scalars['ObjectId'];
  after: InvoiceLogState;
  before: InvoiceLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdateInvoicePaymentLinkLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdateInvoicePaymentLinkLog';
  _id: Scalars['ObjectId'];
  after: InvoicePaymentLinkLogState;
  before: InvoicePaymentLinkLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdateMemberLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdateMemberLog';
  _id: Scalars['ObjectId'];
  after: MemberLogState;
  before: MemberLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdatePaymentLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdatePaymentLog';
  _id: Scalars['ObjectId'];
  after: PaymentLogState;
  before: PaymentLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdatePaymentScheduleLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdatePaymentScheduleLog';
  _id: Scalars['ObjectId'];
  after: PaymentScheduleLogState;
  before: PaymentScheduleLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdatePlanConfigLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdatePlanConfigLog';
  _id: Scalars['ObjectId'];
  after: PlanConfigLogState;
  before: PlanConfigLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdatePolicyLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdatePolicyLog';
  _id: Scalars['ObjectId'];
  after: PolicyLogState;
  before: PolicyLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdateProductLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdateProductLog';
  _id: Scalars['ObjectId'];
  after: ProductLogState;
  before: ProductLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdateProductPriceLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdateProductPriceLog';
  _id: Scalars['ObjectId'];
  after: ProductLogState;
  before: ProductLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdatePurchaseLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdatePurchaseLog';
  _id: Scalars['ObjectId'];
  after: PurchaseLogState;
  before: PurchaseLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdateRecipientLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdateRecipientLog';
  _id: Scalars['ObjectId'];
  after: RecipientLogState;
  before: RecipientLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdateRefundLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdateRefundLog';
  _id: Scalars['ObjectId'];
  after: RefundLogState;
  before: RefundLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdateUserPaymentProfileLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdateUserPaymentProfileLog';
  _id: Scalars['ObjectId'];
  after: UserPaymentProfileLogState;
  before: UserPaymentProfileLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type UpdateWithdrawalStatusLog = EntityCommonFieldsInterface & Log & {
  __typename?: 'UpdateWithdrawalStatusLog';
  _id: Scalars['ObjectId'];
  after: WithdrawalLogState;
  before: WithdrawalLogState;
  createdAt: Scalars['DateTime'];
  source?: Maybe<LogSource>;
  targets: Array<LogTarget>;
  type: LogType;
  updatedAt: Scalars['DateTime'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  definePasswordNextAccess: Scalars['Boolean'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberCountry?: Maybe<CountryIsoCode>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserCourseState = {
  __typename?: 'UserCourseState';
  _id: Scalars['ObjectId'];
  course: Course;
  courseId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  lastLesson: Lesson;
  lastLessonId: Scalars['String'];
  lastVideoSeconds?: Maybe<Scalars['Float']>;
  organization: Organization;
  organizationId: Scalars['String'];
  studentUserId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type UserPaymentProfile = {
  __typename?: 'UserPaymentProfile';
  _id: Scalars['ObjectId'];
  address?: Maybe<Address>;
  country: CountryIsoCode;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  currency: Currency;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  latest: Scalars['Boolean'];
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  organizationId: Scalars['String'];
  sharedId: Scalars['String'];
  taxIds?: Maybe<Array<TaxId>>;
  type: LegalPersonType;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']>;
  user: StudentUser;
  userId?: Maybe<Scalars['String']>;
};

export type UserPaymentProfileLogState = {
  __typename?: 'UserPaymentProfileLogState';
  userPaymentProfile: UserPaymentProfile;
};

export type UserPaymentProfileOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  name?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export type UserPaymentProfileWhereInput = {
  and?: Maybe<Array<UserPaymentProfileWhereInput>>;
  country?: Maybe<CountryEnumFilterInput>;
  createdAt?: Maybe<DateFilterInput>;
  currency?: Maybe<CurrencyEnumFilterInput>;
  latest?: Maybe<BooleanFilterInput>;
  name?: Maybe<StringFilterInput>;
  or?: Maybe<Array<UserPaymentProfileWhereInput>>;
  updatedAt?: Maybe<DateFilterInput>;
};

export type UserProgress = {
  __typename?: 'UserProgress';
  _id: Scalars['ObjectId'];
  completed: Scalars['Boolean'];
  completedAt?: Maybe<Scalars['DateTime']>;
  course: Course;
  courseId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['String']>;
  lesson: Lesson;
  lessonId: Scalars['String'];
  organization: Organization;
  organizationId: Scalars['String'];
  ratedAt?: Maybe<Scalars['DateTime']>;
  rating?: Maybe<Scalars['Float']>;
  ratingComment?: Maybe<Scalars['String']>;
  studentUserId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type UserProgressDataResponse = {
  __typename?: 'UserProgressDataResponse';
  completedLessonCount: Scalars['Int'];
  progressPercentage: Scalars['Float'];
  totalLessonCount: Scalars['Int'];
};

export type UserProgressPaginationInput = {
  /** default: 10000, max: 10000 */
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type UserQuestionnaireAnswer = {
  __typename?: 'UserQuestionnaireAnswer';
  _id: Scalars['ObjectId'];
  answeredPercentage: Scalars['Float'];
  answers: Array<Answer>;
  attemptCount: Scalars['Float'];
  completedAt?: Maybe<Scalars['DateTime']>;
  correctlyAnsweredPercentage: Scalars['Float'];
  course?: Maybe<Course>;
  courseId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['ObjectId']>;
  enrolments?: Maybe<Array<Enrolment>>;
  lesson?: Maybe<Lesson>;
  lessonId?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  questionnaire?: Maybe<Questionnaire>;
  questionnaireId?: Maybe<Scalars['String']>;
  questionnaireSharedId?: Maybe<Scalars['String']>;
  replacedBy?: Maybe<UserQuestionnaireAnswer>;
  replacedById?: Maybe<Scalars['String']>;
  startedAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type UserQuestionnaireAnswerOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
  updatedAt?: Maybe<OrderByDirection>;
};

export enum UserType {
  Admin = 'ADMIN',
  Student = 'STUDENT'
}

export type UserWhereInput = {
  and?: Maybe<Array<UserWhereInput>>;
  createdAt?: Maybe<DateFilterInput>;
  email?: Maybe<StringFilterInput>;
  name?: Maybe<StringFilterInput>;
  or?: Maybe<Array<UserWhereInput>>;
  updatedAt?: Maybe<DateFilterInput>;
};

export type UsersProgressV1Report = EntityCommonFieldsInterface & Report & {
  __typename?: 'UsersProgressV1Report';
  _id: Scalars['ObjectId'];
  courses: Array<Course>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById: Scalars['String'];
  files?: Maybe<Array<File>>;
  generatedAt?: Maybe<Scalars['DateTime']>;
  organization: Organization;
  organizationId: Scalars['String'];
  status: ReportStatus;
  students: Array<StudentUser>;
  title?: Maybe<Scalars['String']>;
  type: ReportType;
  updatedAt: Scalars['DateTime'];
};

export type VideoContentBlockV1 = ContentBlock & {
  __typename?: 'VideoContentBlockV1';
  _id: Scalars['ObjectId'];
  component: ContentBlockComponentType;
  referencedFileIds: Array<Scalars['String']>;
  referencedFiles?: Maybe<Array<FilestackS3File>>;
  videoProvider: Scalars['String'];
  videoUrl: Scalars['String'];
};

export type VideoContentBlockV1Input = {
  component: ContentBlockComponentType;
  referencedFiles?: Maybe<Array<Scalars['String']>>;
  videoProvider: Scalars['String'];
  videoUrl?: Maybe<Scalars['String']>;
};

export type VolumeProductPrice = ProductPriceBillingConfig & {
  __typename?: 'VolumeProductPrice';
  tiers: Array<Tier>;
  type: ProductPriceBillingType;
};

export type VolumeProductPriceInput = {
  tiers: Array<TierInput>;
  type: ProductPriceBillingType;
};

export type Withdrawal = {
  __typename?: 'Withdrawal';
  _id: Scalars['ObjectId'];
  amount: Scalars['Float'];
  bankAccount?: Maybe<BankAccount>;
  bankAccountId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  currency: Currency;
  description?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  pagarmeExternalId?: Maybe<Scalars['String']>;
  paymentDate?: Maybe<Scalars['DateTime']>;
  recipient?: Maybe<Recipient>;
  recipientId?: Maybe<Scalars['String']>;
  status: WithdrawalStatus;
  stripeExternalId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  withdrawalGatewayFeeAmount?: Maybe<Scalars['Float']>;
};

export type WithdrawalLogState = {
  __typename?: 'WithdrawalLogState';
  withdrawal: Withdrawal;
};

export type WithdrawalOrderByInput = {
  createdAt?: Maybe<OrderByDirection>;
};

export enum WithdrawalStatus {
  Canceled = 'CANCELED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Preparing = 'PREPARING',
  Processing = 'PROCESSING',
  Transferred = 'TRANSFERRED'
}

export type AdminGenerateStudentMagicTokenResponse = {
  __typename?: 'adminGenerateStudentMagicTokenResponse';
  magicLink: Scalars['String'];
  magicToken: Scalars['String'];
};

export type AdminSendResetPasswordTokenResponse = {
  __typename?: 'adminSendResetPasswordTokenResponse';
  status: Scalars['String'];
};

export type StudentSendResetPasswordTokenResponse = {
  __typename?: 'studentSendResetPasswordTokenResponse';
  status: Scalars['String'];
};

export type FetchOrganizationFragment = (
  { __typename?: 'Organization' }
  & Pick<Organization, '_id' | 'name' | 'domains' | 'subdomains' | 'emailReplyToAddress' | 'url'>
  & { appearance?: Maybe<(
    { __typename?: 'OrganizationAppearance' }
    & Pick<OrganizationAppearance, 'primaryColor'>
    & { logo?: Maybe<(
      { __typename?: 'FilestackS3File' }
      & FetchFileFragment
    )>, squareLogo32?: Maybe<(
      { __typename?: 'FilestackS3File' }
      & FetchFileFragment
    )>, squareLogo256?: Maybe<(
      { __typename?: 'FilestackS3File' }
      & FetchFileFragment
    )> }
  )> }
);

export type FetchUserFragment = (
  { __typename?: 'User' }
  & Pick<User, '_id' | 'name' | 'email' | 'language' | 'createdAt' | 'updatedAt' | 'definePasswordNextAccess'>
);

export type FetchMemberFragment = (
  { __typename?: 'Member' }
  & Pick<Member, '_id' | 'createdAt'>
  & { user: (
    { __typename?: 'User' }
    & Pick<User, '_id' | 'name' | 'email'>
  ), policies: Array<(
    { __typename?: 'Policy' }
    & Pick<Policy, '_id' | 'name'>
  )> }
);

export type FetchStudentFragment = (
  { __typename?: 'StudentUser' }
  & Pick<StudentUser, '_id' | 'name' | 'email' | 'phoneNumber' | 'phoneNumberCountry' | 'language' | 'createdAt' | 'updatedAt' | 'definePasswordNextAccess' | 'roles' | 'totalPaidAmount' | 'activeEnrolsCount' | 'lastAccessAt'>
);

export type FetchAdminFragment = (
  { __typename?: 'AdminUser' }
  & Pick<AdminUser, '_id' | 'name' | 'email' | 'language' | 'createdAt' | 'updatedAt' | 'definePasswordNextAccess'>
);

export type AdminAuthFragment = (
  { __typename?: 'AdminUserAuthResponse' }
  & Pick<AdminUserAuthResponse, 'sessionToken'>
  & { user: (
    { __typename?: 'AdminUser' }
    & FetchAdminFragment
  ), session: (
    { __typename?: 'Session' }
    & Pick<Session, 'createdAt' | 'expiresAt'>
  ) }
);

export type StudentAuthFragment = (
  { __typename?: 'StudentUserAuthResponse' }
  & Pick<StudentUserAuthResponse, 'sessionToken'>
  & { user: (
    { __typename?: 'StudentUser' }
    & FetchStudentFragment
  ), session: (
    { __typename?: 'Session' }
    & Pick<Session, 'createdAt' | 'expiresAt'>
  ) }
);

export type FetchPoliciesFragment = (
  { __typename?: 'Policy' }
  & Pick<Policy, '_id' | 'createdAt' | 'updatedAt' | 'name' | 'version' | 'organizationId'>
  & { statements: Array<(
    { __typename?: 'PolicyStatements' }
    & Pick<PolicyStatements, 'effect'>
  )> }
);

export type FetchCertificateTemplatesFragmentFragment = (
  { __typename?: 'CertificateTemplate' }
  & Pick<CertificateTemplate, '_id' | 'updatedAt' | 'name' | 'sharedId' | 'dynamicFields' | 'customDynamicFields'>
  & { updatedBy?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'email'>
  )> }
);

export type CertificateTemplateTextContentFragmentFragment = (
  { __typename?: 'CertificateTemplateTextContent' }
  & Pick<CertificateTemplateTextContent, '_id' | 'x' | 'y' | 'width' | 'alignment'>
  & { text: Array<(
    { __typename?: 'CertificateTemplateTextContentText' }
    & Pick<CertificateTemplateTextContentText, 'value' | 'bold' | 'italics' | 'underline' | 'strike' | 'color' | 'background' | 'font' | 'fontSize' | 'characterSpacing' | 'lineHeight' | 'link'>
  )> }
);

export type CertificateTemplateStaticImageContentFragmentFragment = (
  { __typename?: 'CertificateTemplateStaticImageContent' }
  & Pick<CertificateTemplateStaticImageContent, '_id' | 'x' | 'y' | 'width' | 'link' | 'height'>
  & { file?: Maybe<(
    { __typename?: 'FilestackS3File' }
    & ReadonlyFileFragmentFragment
  )> }
);

export type FetchCertificateTemplateFragmentFragment = (
  { __typename?: 'CertificateTemplate' }
  & { pages: Array<(
    { __typename: 'CertificateTemplatePage' }
    & Pick<CertificateTemplatePage, '_id' | 'width' | 'height' | 'backgroundColor'>
    & { backgroundImage?: Maybe<(
      { __typename?: 'FilestackS3File' }
      & ReadonlyFileFragmentFragment
    )>, content: Array<(
      { __typename: 'CertificateTemplateStaticImageContent' }
      & CertificateTemplateStaticImageContentFragmentFragment
    ) | (
      { __typename: 'CertificateTemplateTextContent' }
      & CertificateTemplateTextContentFragmentFragment
    )> }
  )> }
  & FetchCertificateTemplatesFragmentFragment
);

export type FetchCertificatesFragmentFragment = (
  { __typename?: 'Certificate' }
  & Pick<Certificate, '_id' | 'createdAt' | 'updatedAt' | 'expiredAt' | 'organizationId' | 'sharedId' | 'emissionSource' | 'pageUrl'>
  & { pdf?: Maybe<(
    { __typename: 'FilestackS3File' }
    & Pick<FilestackS3File, '_id' | 'url'>
  )>, user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'name' | 'email'>
  )>, updatedBy?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'name'>
  )>, payload: (
    { __typename?: 'CertificatePayload' }
    & Pick<CertificatePayload, 'studentName' | 'studentEmail' | 'courseName' | 'roomName' | 'emissionDate'>
    & { customDynamicFields?: Maybe<Array<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'key' | 'value'>
    )>> }
  ), course?: Maybe<(
    { __typename?: 'Course' }
    & Pick<Course, '_id' | 'name'>
  )>, room?: Maybe<(
    { __typename?: 'Room' }
    & Pick<Room, 'name' | 'courseId'>
  )>, certificateTemplate?: Maybe<(
    { __typename?: 'CertificateTemplate' }
    & Pick<CertificateTemplate, '_id' | 'sharedId' | 'name'>
  )>, thumbnail?: Maybe<(
    { __typename?: 'FilestackS3File' }
    & ReadonlyFileFragmentFragment
  )> }
);

export type FetchCertificatesListFragmentFragment = (
  { __typename?: 'PaginatedCertificateResponse' }
  & Pick<PaginatedCertificateResponse, 'currentPage' | 'hasNextPage' | 'totalPageCount' | 'totalResultCount'>
  & { results: Array<(
    { __typename?: 'Certificate' }
    & FetchCertificatesFragmentFragment
  )> }
);

export type FetchCoursesFragment = (
  { __typename?: 'Course' }
  & Pick<Course, '_id' | 'name' | 'slug' | 'status' | 'description' | 'deletedAt' | 'createdAt'>
  & { content: Array<(
    { __typename?: 'CourseContent' }
    & { chapter: (
      { __typename?: 'Chapter' }
      & Pick<Chapter, 'status'>
    ), lessons: Array<(
      { __typename?: 'Lesson' }
      & Pick<Lesson, 'status'>
    )> }
  )>, rooms: Array<(
    { __typename?: 'Room' }
    & Pick<Room, '_id' | 'name'>
  )>, backgroundImage?: Maybe<(
    { __typename?: 'FilestackS3File' }
    & FetchFileFragment
  )> }
);

export type FetchLessonsFragment = (
  { __typename?: 'Lesson' }
  & Pick<Lesson, '_id' | 'name' | 'mediaTime' | 'readingTime' | 'status' | 'blockType' | 'blockEndsAt' | 'blockStartsAt' | 'blockStartedAt' | 'usedBy'>
  & { course: (
    { __typename?: 'Course' }
    & { content: Array<(
      { __typename?: 'CourseContent' }
      & Pick<CourseContent, 'chapterId'>
    )> }
  ), expirationRule?: Maybe<(
    { __typename?: 'DateConstraint' }
    & Pick<DateConstraint, 'dateLimit' | 'daysLimit' | 'type'>
  )>, rating: (
    { __typename?: 'LessonRating' }
    & Pick<LessonRating, 'average' | 'count'>
  ), liberationRule?: Maybe<(
    { __typename?: 'DateConstraint' }
    & Pick<DateConstraint, 'dateLimit' | 'daysLimit' | 'constraintType'>
    & { dateType: DateConstraint['type'] }
  ) | (
    { __typename?: 'ProgressConstraint' }
    & Pick<ProgressConstraint, 'chapterIds' | 'lessonIds' | 'constraintType'>
    & { progressType: ProgressConstraint['type'] }
  )>, contentBlocks?: Maybe<Array<(
    { __typename?: 'AttachmentsContentBlockV1' }
    & Pick<AttachmentsContentBlockV1, 'component'>
  ) | (
    { __typename?: 'EmbedContentBlockV1' }
    & Pick<EmbedContentBlockV1, 'component'>
  ) | (
    { __typename?: 'QuestionnaireContentBlockV1' }
    & Pick<QuestionnaireContentBlockV1, 'component'>
  ) | (
    { __typename?: 'TextContentBlockV1' }
    & Pick<TextContentBlockV1, 'component'>
  ) | (
    { __typename?: 'VideoContentBlockV1' }
    & Pick<VideoContentBlockV1, 'component'>
  )>> }
);

export type FetchCourseFragment = (
  { __typename?: 'Course' }
  & Pick<Course, '_id' | 'name' | 'slug' | 'description' | 'deletedAt' | 'createdAt' | 'status' | 'completionPercent' | 'certificateTemplateSharedId'>
  & { content: Array<(
    { __typename?: 'CourseContent' }
    & { chapter: (
      { __typename?: 'Chapter' }
      & Pick<Chapter, '_id' | 'name' | 'status' | 'usedBy'>
    ), lessons: Array<(
      { __typename?: 'Lesson' }
      & FetchLessonsFragment
    )> }
  )>, backgroundImage?: Maybe<(
    { __typename?: 'FilestackS3File' }
    & FetchFileFragment
  )> }
);

export type FetchQuestionSingleChoiceFragment = (
  { __typename: 'QuestionSingleChoice' }
  & Pick<QuestionSingleChoice, '_id' | 'type' | 'title' | 'description' | 'required' | 'showCorrectAnswer' | 'correctAnswerFeedback' | 'wrongAnswerFeedback' | 'weight' | 'randomizeOptions'>
  & { options: Array<(
    { __typename?: 'Option' }
    & Pick<Option, '_id' | 'title' | 'correct'>
  )> }
);

export type FetchQuestionMultipleChoiceFragment = (
  { __typename: 'QuestionMultipleChoice' }
  & Pick<QuestionMultipleChoice, '_id' | 'type' | 'title' | 'description' | 'required' | 'showCorrectAnswer' | 'correctAnswerFeedback' | 'wrongAnswerFeedback' | 'weight' | 'randomizeOptions'>
  & { options: Array<(
    { __typename?: 'Option' }
    & Pick<Option, '_id' | 'title' | 'correct'>
  )> }
);

export type FetchQuestionTrueOrFalseFragment = (
  { __typename: 'QuestionTrueOrFalse' }
  & Pick<QuestionTrueOrFalse, '_id' | 'type' | 'title' | 'description' | 'required' | 'showCorrectAnswer' | 'correctAnswerFeedback' | 'wrongAnswerFeedback' | 'weight'>
  & { options: Array<(
    { __typename?: 'Option' }
    & Pick<Option, '_id' | 'title' | 'correct'>
  )> }
);

export type FetchQuestionTextFragment = (
  { __typename: 'QuestionText' }
  & Pick<QuestionText, '_id' | 'type' | 'title' | 'description' | 'required' | 'showCorrectAnswer' | 'feedbackAfterSubmit'>
);

type FetchQuestionnaire_QuestionnaireExam_Fragment = (
  { __typename: 'QuestionnaireExam' }
  & Pick<QuestionnaireExam, '_id' | 'sharedId' | 'latest' | 'name' | 'type' | 'description' | 'updatedAt' | 'createdAt'>
  & { passingGrade?: Maybe<(
    { __typename?: 'QuestionnairePassingGrade' }
    & Pick<QuestionnairePassingGrade, 'weight'>
  )>, questions: Array<(
    { __typename: 'QuestionMultipleChoice' }
    & FetchQuestionMultipleChoiceFragment
  ) | (
    { __typename: 'QuestionSingleChoice' }
    & FetchQuestionSingleChoiceFragment
  ) | (
    { __typename: 'QuestionText' }
    & FetchQuestionTextFragment
  ) | (
    { __typename: 'QuestionTrueOrFalse' }
    & FetchQuestionTrueOrFalseFragment
  )> }
);

type FetchQuestionnaire_QuestionnaireQuiz_Fragment = (
  { __typename: 'QuestionnaireQuiz' }
  & Pick<QuestionnaireQuiz, '_id' | 'sharedId' | 'latest' | 'name' | 'type' | 'description' | 'updatedAt' | 'createdAt'>
  & { passingGrade?: Maybe<(
    { __typename?: 'QuestionnairePassingGrade' }
    & Pick<QuestionnairePassingGrade, 'weight'>
  )>, questions: Array<(
    { __typename: 'QuestionMultipleChoice' }
    & FetchQuestionMultipleChoiceFragment
  ) | (
    { __typename: 'QuestionSingleChoice' }
    & FetchQuestionSingleChoiceFragment
  ) | (
    { __typename: 'QuestionText' }
    & FetchQuestionTextFragment
  ) | (
    { __typename: 'QuestionTrueOrFalse' }
    & FetchQuestionTrueOrFalseFragment
  )> }
);

type FetchQuestionnaire_QuestionnaireSurvey_Fragment = (
  { __typename: 'QuestionnaireSurvey' }
  & Pick<QuestionnaireSurvey, '_id' | 'sharedId' | 'latest' | 'name' | 'type' | 'description' | 'updatedAt' | 'createdAt'>
  & { questions: Array<(
    { __typename: 'QuestionMultipleChoice' }
    & FetchQuestionMultipleChoiceFragment
  ) | (
    { __typename: 'QuestionSingleChoice' }
    & FetchQuestionSingleChoiceFragment
  ) | (
    { __typename: 'QuestionText' }
    & FetchQuestionTextFragment
  ) | (
    { __typename: 'QuestionTrueOrFalse' }
    & FetchQuestionTrueOrFalseFragment
  )> }
);

export type FetchQuestionnaireFragment = FetchQuestionnaire_QuestionnaireExam_Fragment | FetchQuestionnaire_QuestionnaireQuiz_Fragment | FetchQuestionnaire_QuestionnaireSurvey_Fragment;

type FetchQuestionnaires_QuestionnaireExam_Fragment = (
  { __typename?: 'QuestionnaireExam' }
  & Pick<QuestionnaireExam, '_id' | 'sharedId' | 'latest' | 'name' | 'type' | 'description' | 'createdAt'>
  & { passingGrade?: Maybe<(
    { __typename?: 'QuestionnairePassingGrade' }
    & Pick<QuestionnairePassingGrade, 'weight'>
  )> }
);

type FetchQuestionnaires_QuestionnaireQuiz_Fragment = (
  { __typename?: 'QuestionnaireQuiz' }
  & Pick<QuestionnaireQuiz, '_id' | 'sharedId' | 'latest' | 'name' | 'type' | 'description' | 'createdAt'>
  & { passingGrade?: Maybe<(
    { __typename?: 'QuestionnairePassingGrade' }
    & Pick<QuestionnairePassingGrade, 'weight'>
  )> }
);

type FetchQuestionnaires_QuestionnaireSurvey_Fragment = (
  { __typename?: 'QuestionnaireSurvey' }
  & Pick<QuestionnaireSurvey, '_id' | 'sharedId' | 'latest' | 'name' | 'type' | 'description' | 'createdAt'>
);

export type FetchQuestionnairesFragment = FetchQuestionnaires_QuestionnaireExam_Fragment | FetchQuestionnaires_QuestionnaireQuiz_Fragment | FetchQuestionnaires_QuestionnaireSurvey_Fragment;

export type FetchQuestionnaireAnswersFragment = (
  { __typename?: 'UserQuestionnaireAnswer' }
  & Pick<UserQuestionnaireAnswer, '_id' | 'completedAt' | 'attemptCount' | 'answeredPercentage' | 'correctlyAnsweredPercentage'>
  & { course?: Maybe<(
    { __typename?: 'Course' }
    & Pick<Course, '_id' | 'name'>
  )>, enrolments?: Maybe<Array<(
    { __typename?: 'Enrolment' }
    & { room: (
      { __typename?: 'Room' }
      & Pick<Room, 'name'>
    ) }
  )>>, lesson?: Maybe<(
    { __typename?: 'Lesson' }
    & Pick<Lesson, 'name'>
  )>, questionnaire?: Maybe<(
    { __typename?: 'QuestionnaireExam' }
    & Pick<QuestionnaireExam, 'name' | 'type'>
  ) | (
    { __typename?: 'QuestionnaireQuiz' }
    & Pick<QuestionnaireQuiz, 'name' | 'type'>
  ) | (
    { __typename?: 'QuestionnaireSurvey' }
    & Pick<QuestionnaireSurvey, 'name' | 'type'>
  )> }
);

export type FetchLessonFragment = (
  { __typename?: 'Lesson' }
  & Pick<Lesson, '_id' | 'name' | 'deletedAt' | 'createdAt' | 'blockType' | 'blockEndsAt' | 'blockStartsAt' | 'blockStartedAt' | 'createdById' | 'status' | 'completionRequired' | 'mediaTime' | 'readingTime' | 'usedBy'>
  & { course: (
    { __typename?: 'Course' }
    & Pick<Course, '_id' | 'name'>
    & { content: Array<(
      { __typename?: 'CourseContent' }
      & Pick<CourseContent, 'chapterId'>
    )> }
  ), rating: (
    { __typename?: 'LessonRating' }
    & Pick<LessonRating, 'average' | 'count'>
  ), expirationRule?: Maybe<(
    { __typename?: 'DateConstraint' }
    & Pick<DateConstraint, 'dateLimit' | 'daysLimit' | 'type'>
  )>, liberationRule?: Maybe<(
    { __typename?: 'DateConstraint' }
    & Pick<DateConstraint, 'dateLimit' | 'daysLimit' | 'constraintType'>
    & { dateType: DateConstraint['type'] }
  ) | (
    { __typename?: 'ProgressConstraint' }
    & Pick<ProgressConstraint, 'chapterIds' | 'lessonIds' | 'constraintType'>
    & { progressType: ProgressConstraint['type'] }
  )>, contentBlocks?: Maybe<Array<(
    { __typename?: 'AttachmentsContentBlockV1' }
    & Pick<AttachmentsContentBlockV1, 'component'>
    & { referencedFiles?: Maybe<Array<(
      { __typename?: 'FilestackS3File' }
      & FetchFileFragment
    )>> }
  ) | (
    { __typename?: 'EmbedContentBlockV1' }
    & Pick<EmbedContentBlockV1, 'component' | 'embedUrl'>
    & { referencedFiles?: Maybe<Array<(
      { __typename?: 'FilestackS3File' }
      & FetchFileFragment
    )>> }
  ) | (
    { __typename?: 'QuestionnaireContentBlockV1' }
    & Pick<QuestionnaireContentBlockV1, 'component' | 'questionnaireSharedId'>
    & { questionnaire?: Maybe<(
      { __typename?: 'QuestionnaireExam' }
      & FetchQuestionnaire_QuestionnaireExam_Fragment
    ) | (
      { __typename?: 'QuestionnaireQuiz' }
      & FetchQuestionnaire_QuestionnaireQuiz_Fragment
    ) | (
      { __typename?: 'QuestionnaireSurvey' }
      & FetchQuestionnaire_QuestionnaireSurvey_Fragment
    )>, referencedFiles?: Maybe<Array<(
      { __typename?: 'FilestackS3File' }
      & FetchFileFragment
    )>> }
  ) | (
    { __typename?: 'TextContentBlockV1' }
    & Pick<TextContentBlockV1, 'component' | 'text'>
    & { referencedFiles?: Maybe<Array<(
      { __typename?: 'FilestackS3File' }
      & FetchFileFragment
    )>> }
  ) | (
    { __typename?: 'VideoContentBlockV1' }
    & Pick<VideoContentBlockV1, 'component' | 'videoUrl' | 'videoProvider'>
    & { referencedFiles?: Maybe<Array<(
      { __typename?: 'FilestackS3File' }
      & FetchFileFragment
    )>> }
  )>> }
);

export type FetchUserProgressFragment = (
  { __typename?: 'UserProgress' }
  & Pick<UserProgress, '_id' | 'studentUserId' | 'courseId' | 'lessonId' | 'rating' | 'ratingComment' | 'ratedAt' | 'completed' | 'completedAt' | 'createdAt'>
);

export type FetchUserProgressDataResponseFragment = (
  { __typename?: 'UserProgressDataResponse' }
  & Pick<UserProgressDataResponse, 'progressPercentage' | 'totalLessonCount' | 'completedLessonCount'>
);

export type FetchUserStateFragment = (
  { __typename?: 'UserCourseState' }
  & Pick<UserCourseState, '_id' | 'studentUserId' | 'courseId' | 'lastLessonId' | 'lastVideoSeconds' | 'createdAt'>
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'name'>
  ) }
);

export type FetchUserQuestionnaireAnswerSimpleFragment = (
  { __typename?: 'UserQuestionnaireAnswer' }
  & Pick<UserQuestionnaireAnswer, '_id' | 'userId' | 'courseId' | 'lessonId' | 'questionnaireId' | 'questionnaireSharedId' | 'replacedById' | 'startedAt' | 'completedAt' | 'attemptCount'>
);

export type FetchUserQuestionnaireAnswerFragment = (
  { __typename?: 'UserQuestionnaireAnswer' }
  & Pick<UserQuestionnaireAnswer, '_id' | 'userId' | 'courseId' | 'lessonId' | 'questionnaireId' | 'questionnaireSharedId' | 'replacedById' | 'startedAt' | 'completedAt' | 'attemptCount'>
  & { answers: Array<(
    { __typename: 'AnswerMultipleChoice' }
    & Pick<AnswerMultipleChoice, 'options' | '_id' | 'answeredAt' | 'correct' | 'type' | 'question'>
  ) | (
    { __typename: 'AnswerSingleChoice' }
    & Pick<AnswerSingleChoice, 'option' | '_id' | 'answeredAt' | 'correct' | 'type' | 'question'>
  ) | (
    { __typename: 'AnswerText' }
    & Pick<AnswerText, '_id' | 'answeredAt' | 'correct' | 'type' | 'question'>
  ) | (
    { __typename: 'AnswerTrueOrFalse' }
    & Pick<AnswerTrueOrFalse, 'option' | '_id' | 'answeredAt' | 'correct' | 'type' | 'question'>
  )> }
);

export type FetchUserQuestionnaireAnswerWithQuestionnaireFragment = (
  { __typename?: 'UserQuestionnaireAnswer' }
  & Pick<UserQuestionnaireAnswer, '_id' | 'userId' | 'courseId' | 'lessonId' | 'questionnaireId' | 'questionnaireSharedId' | 'replacedById' | 'startedAt' | 'completedAt' | 'attemptCount'>
  & { questionnaire?: Maybe<(
    { __typename?: 'QuestionnaireExam' }
    & FetchQuestionnaire_QuestionnaireExam_Fragment
  ) | (
    { __typename?: 'QuestionnaireQuiz' }
    & FetchQuestionnaire_QuestionnaireQuiz_Fragment
  ) | (
    { __typename?: 'QuestionnaireSurvey' }
    & FetchQuestionnaire_QuestionnaireSurvey_Fragment
  )>, answers: Array<(
    { __typename: 'AnswerMultipleChoice' }
    & Pick<AnswerMultipleChoice, 'options' | '_id' | 'answeredAt' | 'correct' | 'type' | 'question'>
  ) | (
    { __typename: 'AnswerSingleChoice' }
    & Pick<AnswerSingleChoice, 'option' | '_id' | 'answeredAt' | 'correct' | 'type' | 'question'>
  ) | (
    { __typename: 'AnswerText' }
    & Pick<AnswerText, '_id' | 'answeredAt' | 'correct' | 'type' | 'question'>
  ) | (
    { __typename: 'AnswerTrueOrFalse' }
    & Pick<AnswerTrueOrFalse, 'option' | '_id' | 'answeredAt' | 'correct' | 'type' | 'question'>
  )> }
);

export type FetchFileFragment = (
  { __typename?: 'FilestackS3File' }
  & Pick<FilestackS3File, '_id' | 'url' | 'contentType' | 'key' | 'size' | 'source' | 'title' | 'altText' | 'description' | 'originalName' | 'originalPath' | 'filestackFileId' | 'filestackUploadId' | 'filestackUrl' | 'updatedAt' | 'createdAt' | 'createdById'>
);

export type ReadonlyFileFragmentFragment = (
  { __typename: 'FilestackS3File' }
  & Pick<FilestackS3File, '_id' | 'altText' | 'url'>
);

export type FetchInvoiceFragmentFragment = (
  { __typename?: 'Invoice' }
  & Pick<Invoice, '_id' | 'createdAt' | 'status' | 'checkoutSharedId' | 'createdById' | 'expirationDate' | 'itemsAmount' | 'paidAmount' | 'refundedAmount' | 'totalAmount' | 'dueAmount' | 'discountedAmount' | 'description' | 'hasActivePaymentsAttached' | 'activePaymentLinkPaymentMethods'>
  & { user: (
    { __typename?: 'StudentUser' }
    & Pick<StudentUser, '_id' | 'name' | 'email'>
  ), userPaymentProfile: (
    { __typename?: 'UserPaymentProfile' }
    & FetchPaymentProfileFragmentFragment
  ), splitConfig: (
    { __typename?: 'SplitConfig' }
    & Pick<SplitConfig, '_id'>
  ), items: Array<(
    { __typename?: 'InlineInvoiceItem' }
    & Pick<InlineInvoiceItem, 'quantity' | 'name' | 'amount' | 'type'>
  ) | (
    { __typename?: 'ProductInvoiceItem' }
    & Pick<ProductInvoiceItem, 'quantity' | 'productPrice' | 'type'>
    & { attachedInvoiceAccesses?: Maybe<Array<(
      { __typename?: 'InvoiceAccess' }
      & Pick<InvoiceAccess, '_id'>
    )>>, product: (
      { __typename?: 'AccessProduct' }
      & FetchProductFragment_AccessProduct_Fragment
    ) | (
      { __typename?: 'OtherProduct' }
      & FetchProductFragment_OtherProduct_Fragment
    ) }
  )>, discounts?: Maybe<Array<(
    { __typename?: 'InvoiceManualDiscount' }
    & Pick<InvoiceManualDiscount, '_id' | 'description' | 'amount'>
  ) | { __typename?: 'InvoiceVoucherDiscount' }>>, accesses: Array<(
    { __typename?: 'InvoiceAccess' }
    & Pick<InvoiceAccess, '_id' | 'createdAt' | 'status' | 'liberationRule' | 'origin' | 'invitationUrl' | 'isInvitationUsed' | 'isProcessing' | 'productPrice'>
    & { user?: Maybe<(
      { __typename?: 'StudentUser' }
      & Pick<StudentUser, '_id' | 'name' | 'email'>
    )>, product: (
      { __typename?: 'AccessProduct' }
      & FetchProductFragment_AccessProduct_Fragment
    ) | (
      { __typename?: 'OtherProduct' }
      & FetchProductFragment_OtherProduct_Fragment
    ) }
  )> }
);

export type FetchPaymentProfileFragmentFragment = (
  { __typename?: 'UserPaymentProfile' }
  & Pick<UserPaymentProfile, '_id' | 'sharedId' | 'name' | 'type' | 'country' | 'currency'>
  & { user: (
    { __typename?: 'StudentUser' }
    & Pick<StudentUser, '_id' | 'name' | 'email' | 'phoneNumber' | 'phoneNumberCountry'>
  ), taxIds?: Maybe<Array<(
    { __typename?: 'TaxId' }
    & Pick<TaxId, 'type' | 'value'>
  )>>, address?: Maybe<(
    { __typename?: 'Address' }
    & Pick<Address, 'number' | 'complement' | 'zipcode' | 'city' | 'street' | 'state' | 'neighborhood'>
  )> }
);

type FetchPaymentFragment_BankSlipPayment_Fragment = (
  { __typename?: 'BankSlipPayment' }
  & Pick<BankSlipPayment, 'code' | 'pdfUrl' | 'expirationDate' | '_id' | 'createdAt' | 'status' | 'statusAt' | 'amount' | 'checkoutSharedId' | 'createdById' | 'refundedAmount' | 'currency' | 'description' | 'paymentMethod' | 'pagarmeExternalId' | 'scheduleTotalAmount' | 'scheduleInstallment' | 'modality' | 'scheduleTotalInstallments' | 'invoiceId' | 'paymentScheduleSharedId' | 'hasGeneratingSharedPaymentSchedules'>
  & { invoicePaymentLink?: Maybe<(
    { __typename?: 'InvoicePaymentLink' }
    & Pick<InvoicePaymentLink, '_id'>
    & { invoice?: Maybe<(
      { __typename?: 'Invoice' }
      & Pick<Invoice, '_id'>
    )> }
  )>, splitConfig?: Maybe<(
    { __typename?: 'SplitConfig' }
    & { rules: Array<(
      { __typename?: 'SplitRule' }
      & { recipient?: Maybe<(
        { __typename?: 'Recipient' }
        & Pick<Recipient, '_id' | 'name'>
        & { taxIds?: Maybe<Array<(
          { __typename?: 'TaxId' }
          & Pick<TaxId, 'country' | 'type' | 'value'>
        )>> }
      )> }
    )> }
  )>, userPaymentProfile?: Maybe<(
    { __typename?: 'UserPaymentProfile' }
    & Pick<UserPaymentProfile, '_id' | 'name'>
    & { taxIds?: Maybe<Array<(
      { __typename?: 'TaxId' }
      & Pick<TaxId, 'country' | 'type' | 'value'>
    )>>, user: (
      { __typename?: 'StudentUser' }
      & Pick<StudentUser, '_id' | 'name' | 'email' | 'phoneNumber' | 'phoneNumberCountry'>
    ), address?: Maybe<(
      { __typename?: 'Address' }
      & Pick<Address, 'state' | 'city' | 'street' | 'number' | 'zipcode'>
    )> }
  )> }
);

type FetchPaymentFragment_CreditCardPayment_Fragment = (
  { __typename?: 'CreditCardPayment' }
  & Pick<CreditCardPayment, 'installments' | 'brand' | 'holderName' | 'firstDigits' | 'lastDigits' | 'cardExpirationDate' | '_id' | 'createdAt' | 'status' | 'statusAt' | 'amount' | 'checkoutSharedId' | 'createdById' | 'refundedAmount' | 'currency' | 'description' | 'paymentMethod' | 'pagarmeExternalId' | 'scheduleTotalAmount' | 'scheduleInstallment' | 'modality' | 'scheduleTotalInstallments' | 'invoiceId' | 'paymentScheduleSharedId' | 'hasGeneratingSharedPaymentSchedules'>
  & { invoicePaymentLink?: Maybe<(
    { __typename?: 'InvoicePaymentLink' }
    & Pick<InvoicePaymentLink, '_id'>
    & { invoice?: Maybe<(
      { __typename?: 'Invoice' }
      & Pick<Invoice, '_id'>
    )> }
  )>, splitConfig?: Maybe<(
    { __typename?: 'SplitConfig' }
    & { rules: Array<(
      { __typename?: 'SplitRule' }
      & { recipient?: Maybe<(
        { __typename?: 'Recipient' }
        & Pick<Recipient, '_id' | 'name'>
        & { taxIds?: Maybe<Array<(
          { __typename?: 'TaxId' }
          & Pick<TaxId, 'country' | 'type' | 'value'>
        )>> }
      )> }
    )> }
  )>, userPaymentProfile?: Maybe<(
    { __typename?: 'UserPaymentProfile' }
    & Pick<UserPaymentProfile, '_id' | 'name'>
    & { taxIds?: Maybe<Array<(
      { __typename?: 'TaxId' }
      & Pick<TaxId, 'country' | 'type' | 'value'>
    )>>, user: (
      { __typename?: 'StudentUser' }
      & Pick<StudentUser, '_id' | 'name' | 'email' | 'phoneNumber' | 'phoneNumberCountry'>
    ), address?: Maybe<(
      { __typename?: 'Address' }
      & Pick<Address, 'state' | 'city' | 'street' | 'number' | 'zipcode'>
    )> }
  )> }
);

type FetchPaymentFragment_MoneyPayment_Fragment = (
  { __typename?: 'MoneyPayment' }
  & Pick<MoneyPayment, '_id' | 'createdAt' | 'status' | 'statusAt' | 'amount' | 'checkoutSharedId' | 'createdById' | 'refundedAmount' | 'currency' | 'description' | 'paymentMethod' | 'pagarmeExternalId' | 'scheduleTotalAmount' | 'scheduleInstallment' | 'modality' | 'scheduleTotalInstallments' | 'invoiceId' | 'paymentScheduleSharedId' | 'hasGeneratingSharedPaymentSchedules'>
  & { invoicePaymentLink?: Maybe<(
    { __typename?: 'InvoicePaymentLink' }
    & Pick<InvoicePaymentLink, '_id'>
    & { invoice?: Maybe<(
      { __typename?: 'Invoice' }
      & Pick<Invoice, '_id'>
    )> }
  )>, splitConfig?: Maybe<(
    { __typename?: 'SplitConfig' }
    & { rules: Array<(
      { __typename?: 'SplitRule' }
      & { recipient?: Maybe<(
        { __typename?: 'Recipient' }
        & Pick<Recipient, '_id' | 'name'>
        & { taxIds?: Maybe<Array<(
          { __typename?: 'TaxId' }
          & Pick<TaxId, 'country' | 'type' | 'value'>
        )>> }
      )> }
    )> }
  )>, userPaymentProfile?: Maybe<(
    { __typename?: 'UserPaymentProfile' }
    & Pick<UserPaymentProfile, '_id' | 'name'>
    & { taxIds?: Maybe<Array<(
      { __typename?: 'TaxId' }
      & Pick<TaxId, 'country' | 'type' | 'value'>
    )>>, user: (
      { __typename?: 'StudentUser' }
      & Pick<StudentUser, '_id' | 'name' | 'email' | 'phoneNumber' | 'phoneNumberCountry'>
    ), address?: Maybe<(
      { __typename?: 'Address' }
      & Pick<Address, 'state' | 'city' | 'street' | 'number' | 'zipcode'>
    )> }
  )> }
);

type FetchPaymentFragment_PixPayment_Fragment = (
  { __typename?: 'PixPayment' }
  & Pick<PixPayment, 'code' | 'qrCodeUrl' | 'expirationDate' | '_id' | 'createdAt' | 'status' | 'statusAt' | 'amount' | 'checkoutSharedId' | 'createdById' | 'refundedAmount' | 'currency' | 'description' | 'paymentMethod' | 'pagarmeExternalId' | 'scheduleTotalAmount' | 'scheduleInstallment' | 'modality' | 'scheduleTotalInstallments' | 'invoiceId' | 'paymentScheduleSharedId' | 'hasGeneratingSharedPaymentSchedules'>
  & { invoicePaymentLink?: Maybe<(
    { __typename?: 'InvoicePaymentLink' }
    & Pick<InvoicePaymentLink, '_id'>
    & { invoice?: Maybe<(
      { __typename?: 'Invoice' }
      & Pick<Invoice, '_id'>
    )> }
  )>, splitConfig?: Maybe<(
    { __typename?: 'SplitConfig' }
    & { rules: Array<(
      { __typename?: 'SplitRule' }
      & { recipient?: Maybe<(
        { __typename?: 'Recipient' }
        & Pick<Recipient, '_id' | 'name'>
        & { taxIds?: Maybe<Array<(
          { __typename?: 'TaxId' }
          & Pick<TaxId, 'country' | 'type' | 'value'>
        )>> }
      )> }
    )> }
  )>, userPaymentProfile?: Maybe<(
    { __typename?: 'UserPaymentProfile' }
    & Pick<UserPaymentProfile, '_id' | 'name'>
    & { taxIds?: Maybe<Array<(
      { __typename?: 'TaxId' }
      & Pick<TaxId, 'country' | 'type' | 'value'>
    )>>, user: (
      { __typename?: 'StudentUser' }
      & Pick<StudentUser, '_id' | 'name' | 'email' | 'phoneNumber' | 'phoneNumberCountry'>
    ), address?: Maybe<(
      { __typename?: 'Address' }
      & Pick<Address, 'state' | 'city' | 'street' | 'number' | 'zipcode'>
    )> }
  )> }
);

export type FetchPaymentFragmentFragment = FetchPaymentFragment_BankSlipPayment_Fragment | FetchPaymentFragment_CreditCardPayment_Fragment | FetchPaymentFragment_MoneyPayment_Fragment | FetchPaymentFragment_PixPayment_Fragment;

export type FetchPaymentScheduleFragmentFragment = (
  { __typename?: 'PaymentSchedule' }
  & Pick<PaymentSchedule, '_id' | 'createdAt' | 'updatedAt' | 'userPaymentProfileSharedId' | 'cardToken' | 'amount' | 'expirationDate' | 'paymentDate' | 'sharedId' | 'description' | 'totalInstallments' | 'installment' | 'paymentMethod' | 'modality' | 'status' | 'statusAt' | 'totalAmount' | 'organizationId' | 'userPaymentProfileId' | 'splitConfigId' | 'invoiceId' | 'hasGeneratingSharedPaymentSchedules' | 'cardId' | 'userId' | 'createdById' | 'updatedById'>
  & { organization?: Maybe<(
    { __typename?: 'Organization' }
    & Pick<Organization, '_id' | 'name' | 'createdAt' | 'updatedAt'>
  )>, splitConfig?: Maybe<(
    { __typename?: 'SplitConfig' }
    & { rules: Array<(
      { __typename?: 'SplitRule' }
      & { recipient?: Maybe<(
        { __typename?: 'Recipient' }
        & Pick<Recipient, '_id' | 'name'>
        & { taxIds?: Maybe<Array<(
          { __typename?: 'TaxId' }
          & Pick<TaxId, 'country' | 'type' | 'value'>
        )>> }
      )> }
    )> }
  )>, invoice?: Maybe<(
    { __typename?: 'Invoice' }
    & Pick<Invoice, '_id' | 'createdAt' | 'updatedAt'>
  )>, user?: Maybe<(
    { __typename?: 'StudentUser' }
    & Pick<StudentUser, '_id' | 'name' | 'email' | 'createdAt' | 'updatedAt'>
  )>, userPaymentProfile?: Maybe<(
    { __typename?: 'UserPaymentProfile' }
    & Pick<UserPaymentProfile, '_id' | 'name'>
    & { taxIds?: Maybe<Array<(
      { __typename?: 'TaxId' }
      & Pick<TaxId, 'country' | 'type' | 'value'>
    )>>, user: (
      { __typename?: 'StudentUser' }
      & Pick<StudentUser, '_id' | 'name' | 'email' | 'phoneNumber' | 'phoneNumberCountry'>
    ), address?: Maybe<(
      { __typename?: 'Address' }
      & Pick<Address, 'state' | 'city' | 'street' | 'number' | 'zipcode'>
    )> }
  )>, createdBy?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'name' | 'email' | 'createdAt' | 'updatedAt'>
  )>, updatedBy?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'name' | 'email' | 'createdAt' | 'updatedAt'>
  )>, payments?: Maybe<Array<(
    { __typename?: 'BankSlipPayment' }
    & Pick<BankSlipPayment, '_id' | 'createdAt' | 'updatedAt'>
  ) | (
    { __typename?: 'CreditCardPayment' }
    & Pick<CreditCardPayment, '_id' | 'createdAt' | 'updatedAt'>
  ) | (
    { __typename?: 'MoneyPayment' }
    & Pick<MoneyPayment, '_id' | 'createdAt' | 'updatedAt'>
  ) | (
    { __typename?: 'PixPayment' }
    & Pick<PixPayment, '_id' | 'createdAt' | 'updatedAt'>
  )>>, card?: Maybe<(
    { __typename?: 'Card' }
    & Pick<Card, '_id' | 'brand' | 'holderName' | 'firstDigits' | 'lastDigits' | 'expirationDate'>
  )> }
);

export type FetchUserCardsFragment = (
  { __typename?: 'Card' }
  & Pick<Card, '_id' | 'brand' | 'holderName' | 'firstDigits' | 'lastDigits' | 'expirationDate'>
);

type AccessExpirationRule_AccessFixedDateExpirationRule_Fragment = (
  { __typename?: 'AccessFixedDateExpirationRule' }
  & Pick<AccessFixedDateExpirationRule, 'date' | 'type'>
);

type AccessExpirationRule_AccessPeriodExpirationRule_Fragment = (
  { __typename?: 'AccessPeriodExpirationRule' }
  & Pick<AccessPeriodExpirationRule, 'amount' | 'unit' | 'type'>
);

export type AccessExpirationRuleFragment = AccessExpirationRule_AccessFixedDateExpirationRule_Fragment | AccessExpirationRule_AccessPeriodExpirationRule_Fragment;

type FetchProductFragment_AccessProduct_Fragment = (
  { __typename?: 'AccessProduct' }
  & Pick<AccessProduct, '_id' | 'type' | 'name' | 'description' | 'unitLabel' | 'archivedAt' | 'createdAt' | 'updatedAt'>
  & { accessExpirationRule?: Maybe<(
    { __typename?: 'AccessFixedDateExpirationRule' }
    & AccessExpirationRule_AccessFixedDateExpirationRule_Fragment
  ) | (
    { __typename?: 'AccessPeriodExpirationRule' }
    & AccessExpirationRule_AccessPeriodExpirationRule_Fragment
  )>, accesses: Array<(
    { __typename?: 'CohortProductAccess' }
    & { accessExpirationRule?: Maybe<(
      { __typename?: 'AccessFixedDateExpirationRule' }
      & AccessExpirationRule_AccessFixedDateExpirationRule_Fragment
    ) | (
      { __typename?: 'AccessPeriodExpirationRule' }
      & AccessExpirationRule_AccessPeriodExpirationRule_Fragment
    )> }
  ) | (
    { __typename?: 'CourseProductAccess' }
    & Pick<CourseProductAccess, 'courseId' | 'roomId'>
    & { course?: Maybe<(
      { __typename?: 'Course' }
      & Pick<Course, 'name'>
    )>, room?: Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'name'>
    )>, accessExpirationRule?: Maybe<(
      { __typename?: 'AccessFixedDateExpirationRule' }
      & AccessExpirationRule_AccessFixedDateExpirationRule_Fragment
    ) | (
      { __typename?: 'AccessPeriodExpirationRule' }
      & AccessExpirationRule_AccessPeriodExpirationRule_Fragment
    )> }
  )>, prices: Array<(
    { __typename?: 'ProductPrice' }
    & Pick<ProductPrice, '_id' | 'currency' | 'description' | 'createdAt' | 'archivedAt' | 'isBeingUsed'>
    & { billingConfig: { __typename?: 'AdjustedProductPrice' } | { __typename?: 'GraduatedProductPrice' } | { __typename?: 'PackageProductPrice' } | (
      { __typename?: 'PerUnitProductPrice' }
      & Pick<PerUnitProductPrice, 'unitAmount'>
    ) | { __typename?: 'VolumeProductPrice' } }
  )> }
);

type FetchProductFragment_OtherProduct_Fragment = (
  { __typename?: 'OtherProduct' }
  & Pick<OtherProduct, '_id' | 'type' | 'name' | 'description' | 'unitLabel' | 'archivedAt' | 'createdAt' | 'updatedAt'>
  & { prices: Array<(
    { __typename?: 'ProductPrice' }
    & Pick<ProductPrice, '_id' | 'currency' | 'description' | 'createdAt' | 'archivedAt' | 'isBeingUsed'>
    & { billingConfig: { __typename?: 'AdjustedProductPrice' } | { __typename?: 'GraduatedProductPrice' } | { __typename?: 'PackageProductPrice' } | (
      { __typename?: 'PerUnitProductPrice' }
      & Pick<PerUnitProductPrice, 'unitAmount'>
    ) | { __typename?: 'VolumeProductPrice' } }
  )> }
);

export type FetchProductFragmentFragment = FetchProductFragment_AccessProduct_Fragment | FetchProductFragment_OtherProduct_Fragment;

type FetchReports_QuestionnaireAnswersV1Report_Fragment = (
  { __typename?: 'QuestionnaireAnswersV1Report' }
  & Pick<QuestionnaireAnswersV1Report, '_id' | 'createdAt' | 'type' | 'status'>
  & { createdBy?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'email' | 'name'>
  )>, files?: Maybe<Array<(
    { __typename?: 'FilestackS3File' }
    & Pick<FilestackS3File, 'url'>
  )>> }
);

type FetchReports_UsersProgressV1Report_Fragment = (
  { __typename?: 'UsersProgressV1Report' }
  & Pick<UsersProgressV1Report, '_id' | 'createdAt' | 'type' | 'status'>
  & { createdBy?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'email' | 'name'>
  )>, files?: Maybe<Array<(
    { __typename?: 'FilestackS3File' }
    & Pick<FilestackS3File, 'url'>
  )>> }
);

export type FetchReportsFragment = FetchReports_QuestionnaireAnswersV1Report_Fragment | FetchReports_UsersProgressV1Report_Fragment;

export type FetchRoomFragment = (
  { __typename?: 'Room' }
  & Pick<Room, '_id' | 'name'>
  & { liberationRule?: Maybe<(
    { __typename?: 'DateConstraint' }
    & Pick<DateConstraint, 'type' | 'dateLimit' | 'daysLimit'>
  )>, expirationRule?: Maybe<(
    { __typename?: 'DateConstraint' }
    & Pick<DateConstraint, 'type' | 'dateLimit' | 'daysLimit'>
  )> }
);

export type FetchEnrolmentFragment = (
  { __typename?: 'Enrolment' }
  & Pick<Enrolment, '_id' | 'createdAt' | 'studentProgress'>
  & { course: (
    { __typename?: 'Course' }
    & Pick<Course, '_id' | 'name' | 'description'>
    & { backgroundImage?: Maybe<(
      { __typename?: 'FilestackS3File' }
      & Pick<FilestackS3File, 'url'>
    )> }
  ), room: (
    { __typename?: 'Room' }
    & Pick<Room, '_id' | 'name'>
  ), sources: Array<(
    { __typename?: 'EnrolmentSource' }
    & Pick<EnrolmentSource, 'active' | 'type' | 'createdAt'>
  )>, user: (
    { __typename?: 'User' }
    & FetchUserFragment
  ), userCourseState?: Maybe<(
    { __typename?: 'UserCourseState' }
    & Pick<UserCourseState, 'updatedAt'>
    & { lastLesson: (
      { __typename?: 'Lesson' }
      & Pick<Lesson, 'name'>
    ) }
  )> }
);

export type FetchEnrolmentsFragment = (
  { __typename?: 'Enrolment' }
  & Pick<Enrolment, '_id' | 'createdAt' | 'studentProgress'>
  & { course: (
    { __typename?: 'Course' }
    & Pick<Course, '_id' | 'name'>
    & { backgroundImage?: Maybe<(
      { __typename?: 'FilestackS3File' }
      & Pick<FilestackS3File, 'url'>
    )> }
  ), room: (
    { __typename?: 'Room' }
    & Pick<Room, '_id' | 'name'>
  ), sources: Array<(
    { __typename?: 'EnrolmentSource' }
    & Pick<EnrolmentSource, 'active' | 'type' | 'createdAt'>
  )>, user: (
    { __typename?: 'User' }
    & FetchUserFragment
  ), userCourseState?: Maybe<(
    { __typename?: 'UserCourseState' }
    & Pick<UserCourseState, 'updatedAt'>
    & { lastLesson: (
      { __typename?: 'Lesson' }
      & Pick<Lesson, 'name'>
    ) }
  )> }
);

export type FetchDenormalizedEnrolmentFragment = (
  { __typename?: 'DenormalizedEnrolment' }
  & Pick<DenormalizedEnrolment, '_id' | 'createdAt' | 'courseId' | 'courseName' | 'lastLessonAt' | 'lastLessonName' | 'roomName' | 'roomId' | 'userId' | 'userName' | 'userEmail' | 'userProgress'>
);

export type AdminUserSignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type AdminUserSignInMutation = (
  { __typename?: 'Mutation' }
  & { adminUserSignIn: (
    { __typename?: 'AdminUserAuthResponse' }
    & AdminAuthFragment
  ) }
);

export type AdminUserSignUpMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type AdminUserSignUpMutation = (
  { __typename?: 'Mutation' }
  & { adminUserSignUp: (
    { __typename?: 'AdminUserAuthResponse' }
    & AdminAuthFragment
  ) }
);

export type LogOutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogOutMutation = (
  { __typename?: 'Mutation' }
  & { logOut: (
    { __typename?: 'Session' }
    & Pick<Session, 'active'>
  ) }
);

export type AdminCreateOrganizationMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type AdminCreateOrganizationMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateOrganization: (
    { __typename?: 'Organization' }
    & Pick<Organization, '_id' | 'name' | 'url'>
  ) }
);

export type StudentUserSignInMutationVariables = Exact<{
  organizationId: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type StudentUserSignInMutation = (
  { __typename?: 'Mutation' }
  & { studentUserSignIn: (
    { __typename?: 'StudentUserAuthResponse' }
    & StudentAuthFragment
  ) }
);

export type StudentUserSignUpMutationVariables = Exact<{
  organizationId: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type StudentUserSignUpMutation = (
  { __typename?: 'Mutation' }
  & { studentUserSignUp: (
    { __typename?: 'StudentUserAuthResponse' }
    & StudentAuthFragment
  ) }
);

export type AuthenticateMagicTokenMutationVariables = Exact<{
  magicToken: Scalars['String'];
}>;


export type AuthenticateMagicTokenMutation = (
  { __typename?: 'Mutation' }
  & { authenticateMagicToken: (
    { __typename?: 'StudentUserAuthResponse' }
    & StudentAuthFragment
  ) }
);

export type StudentDefinePasswordMutationVariables = Exact<{
  newPassword: Scalars['String'];
}>;


export type StudentDefinePasswordMutation = (
  { __typename?: 'Mutation' }
  & { studentDefinePassword: (
    { __typename?: 'StudentUser' }
    & Pick<StudentUser, '_id'>
  ) }
);

export type AdminUpdateOrganizationMutationVariables = Exact<{
  organizationId: Scalars['String'];
  name: Scalars['String'];
  appearance?: Maybe<OrganizationAppearanceInput>;
  subdomains?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  domains?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  emailReplyToAddress?: Maybe<Scalars['String']>;
}>;


export type AdminUpdateOrganizationMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateOrganization: (
    { __typename?: 'Organization' }
    & FetchOrganizationFragment
  ) }
);

export type AdminGenerateStudentMagicTokenMutationVariables = Exact<{
  organizationId: Scalars['String'];
  studentUserId: Scalars['String'];
}>;


export type AdminGenerateStudentMagicTokenMutation = (
  { __typename?: 'Mutation' }
  & { adminGenerateStudentMagicToken: (
    { __typename?: 'adminGenerateStudentMagicTokenResponse' }
    & Pick<AdminGenerateStudentMagicTokenResponse, 'magicLink'>
  ) }
);

export type AdminSendResetPasswordTokenMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type AdminSendResetPasswordTokenMutation = (
  { __typename?: 'Mutation' }
  & { adminSendResetPasswordToken: (
    { __typename?: 'adminSendResetPasswordTokenResponse' }
    & Pick<AdminSendResetPasswordTokenResponse, 'status'>
  ) }
);

export type AdminResetPasswordMutationVariables = Exact<{
  newPassword: Scalars['String'];
  forgotPasswordToken: Scalars['String'];
}>;


export type AdminResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { adminResetPassword: (
    { __typename?: 'AdminUser' }
    & FetchAdminFragment
  ) }
);

export type StudentSendResetPasswordTokenMutationVariables = Exact<{
  organizationId: Scalars['String'];
  email: Scalars['String'];
}>;


export type StudentSendResetPasswordTokenMutation = (
  { __typename?: 'Mutation' }
  & { studentSendResetPasswordToken: (
    { __typename?: 'studentSendResetPasswordTokenResponse' }
    & Pick<StudentSendResetPasswordTokenResponse, 'status'>
  ) }
);

export type StudentResetPasswordMutationVariables = Exact<{
  newPassword: Scalars['String'];
  forgotPasswordToken: Scalars['String'];
}>;


export type StudentResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { studentResetPassword: (
    { __typename?: 'StudentUser' }
    & FetchStudentFragment
  ) }
);

export type AdminUpdateProfileMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  newPassword?: Maybe<Scalars['String']>;
  currentPassword?: Maybe<Scalars['String']>;
}>;


export type AdminUpdateProfileMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateProfile: (
    { __typename?: 'AdminUser' }
    & FetchAdminFragment
  ) }
);

export type StudentUpdateProfileMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  newPassword?: Maybe<Scalars['String']>;
  currentPassword?: Maybe<Scalars['String']>;
}>;


export type StudentUpdateProfileMutation = (
  { __typename?: 'Mutation' }
  & { studentUpdateProfile: (
    { __typename?: 'StudentUser' }
    & FetchStudentFragment
  ) }
);

export type AdminCreateMemberMutationVariables = Exact<{
  policyIds: Array<Scalars['String']> | Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminCreateMemberMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateMember: (
    { __typename?: 'Member' }
    & FetchMemberFragment
  ) }
);

export type AdminDeleteMemberMutationVariables = Exact<{
  userId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminDeleteMemberMutation = (
  { __typename?: 'Mutation' }
  & { adminDeleteMember: (
    { __typename?: 'Member' }
    & FetchMemberFragment
  ) }
);

export type AdminUpdateMemberMutationVariables = Exact<{
  policyIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  userId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminUpdateMemberMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateMember: (
    { __typename?: 'Member' }
    & FetchMemberFragment
  ) }
);

export type AdminCreateCertificateTemplateMutationVariables = Exact<{
  organizationId: Scalars['String'];
  name: Scalars['String'];
  pages: Array<CertificateTemplatePageInput> | CertificateTemplatePageInput;
}>;


export type AdminCreateCertificateTemplateMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateCertificateTemplate: (
    { __typename?: 'CertificateTemplate' }
    & FetchCertificateTemplateFragmentFragment
  ) }
);

export type AdminUpdateCertificateTemplateMutationVariables = Exact<{
  organizationId: Scalars['String'];
  name: Scalars['String'];
  pages: Array<CertificateTemplatePageInput> | CertificateTemplatePageInput;
  certificateTemplateId: Scalars['String'];
}>;


export type AdminUpdateCertificateTemplateMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateCertificateTemplate: (
    { __typename?: 'CertificateTemplate' }
    & FetchCertificateTemplateFragmentFragment
  ) }
);

export type AdminGenerateCertificateTemplatePreviewMutationVariables = Exact<{
  organizationId: Scalars['String'];
  previewPayload?: Maybe<CertificatePayloadInput>;
  pages: Array<CertificateTemplatePageInput> | CertificateTemplatePageInput;
}>;


export type AdminGenerateCertificateTemplatePreviewMutation = (
  { __typename?: 'Mutation' }
  & { adminGenerateCertificateTemplatePreview: (
    { __typename?: 'GenerateCertificateTemplatePreviewResponse' }
    & Pick<GenerateCertificateTemplatePreviewResponse, 'previewPdfBase64'>
  ) }
);

export type AdminCopyCertificateTemplateMutationVariables = Exact<{
  organizationId: Scalars['String'];
  targetOrganizationId?: Maybe<Scalars['String']>;
  certificateTemplateId: Scalars['String'];
  name: Scalars['String'];
}>;


export type AdminCopyCertificateTemplateMutation = (
  { __typename?: 'Mutation' }
  & { adminCopyCertificateTemplate: (
    { __typename?: 'CopyCertificateTemplateResponse' }
    & Pick<CopyCertificateTemplateResponse, 'status'>
  ) }
);

export type AdminCreateCertificateMutationVariables = Exact<{
  payload: CertificatePayloadInput;
  roomId?: Maybe<Scalars['String']>;
  courseId?: Maybe<Scalars['String']>;
  studentUserId: Scalars['String'];
  organizationId: Scalars['String'];
  certificateTemplateId: Scalars['String'];
  suppressCommunication?: Maybe<Scalars['Boolean']>;
}>;


export type AdminCreateCertificateMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateCertificate: (
    { __typename?: 'Certificate' }
    & FetchCertificatesFragmentFragment
  ) }
);

export type AdminUpdateCertificateMutationVariables = Exact<{
  certificateId: Scalars['String'];
  organizationId: Scalars['String'];
  payload: CertificatePayloadInput;
}>;


export type AdminUpdateCertificateMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateCertificate: (
    { __typename?: 'Certificate' }
    & FetchCertificatesFragmentFragment
  ) }
);

export type AdminGenerateMultiCertificateBaseExcelMutationVariables = Exact<{
  roomId?: Maybe<Scalars['String']>;
  courseId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  certificateTemplateId: Scalars['String'];
}>;


export type AdminGenerateMultiCertificateBaseExcelMutation = (
  { __typename?: 'Mutation' }
  & { adminGenerateMultiCertificateBaseExcel: (
    { __typename?: 'GenerateExcelResponse' }
    & Pick<GenerateExcelResponse, 'base64Excel'>
  ) }
);

export type AdminCreateImportCertificatesV1MutationVariables = Exact<{
  roomId?: Maybe<Scalars['String']>;
  courseId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  certificateTemplateId: Scalars['String'];
  excelFileId: Scalars['String'];
  suppressCommunication?: Maybe<Scalars['Boolean']>;
}>;


export type AdminCreateImportCertificatesV1Mutation = (
  { __typename?: 'Mutation' }
  & { adminCreateImportCertificatesV1: (
    { __typename?: 'ImportCertificate' }
    & Pick<ImportCertificate, '_id'>
  ) }
);

export type AdminCommunicateStudentCertificateEmittedMutationVariables = Exact<{
  organizationId: Scalars['String'];
  certificateSharedId: Scalars['String'];
}>;


export type AdminCommunicateStudentCertificateEmittedMutation = (
  { __typename?: 'Mutation' }
  & { adminCommunicateStudentCertificateEmitted: (
    { __typename?: 'Certificate' }
    & Pick<Certificate, '_id'>
  ) }
);

export type StudentCreateCertificateMutationVariables = Exact<{
  payload: StudentCreateCertificatePayloadInput;
  certificateTemplateSharedId: Scalars['String'];
  courseId: Scalars['String'];
}>;


export type StudentCreateCertificateMutation = (
  { __typename?: 'Mutation' }
  & { studentCreateCertificate: (
    { __typename?: 'Certificate' }
    & FetchCertificatesFragmentFragment
  ) }
);

export type AdminDeleteCertificateMutationVariables = Exact<{
  certificateSharedId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminDeleteCertificateMutation = (
  { __typename?: 'Mutation' }
  & { adminDeleteCertificate: (
    { __typename?: 'Certificate' }
    & Pick<Certificate, '_id'>
  ) }
);

export type AdminCreateCourseMutationVariables = Exact<{
  organizationId: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
}>;


export type AdminCreateCourseMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateCourse: (
    { __typename?: 'AdminCreateCourseResponse' }
    & { course: (
      { __typename?: 'Course' }
      & Pick<Course, '_id' | 'status'>
    ) }
  ) }
);

export type AdminUpdateCourseMutationVariables = Exact<{
  organizationId: Scalars['String'];
  courseId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Array<CourseContentField> | CourseContentField>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<CourseStatus>;
  backgroundImageId?: Maybe<Scalars['String']>;
  completionPercent?: Maybe<Scalars['Float']>;
  certificateTemplateSharedId?: Maybe<Scalars['String']>;
}>;


export type AdminUpdateCourseMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateCourse: (
    { __typename?: 'Course' }
    & Pick<Course, '_id' | 'updatedAt'>
  ) }
);

export type AdminCreateChapterMutationVariables = Exact<{
  organizationId: Scalars['String'];
  courseId: Scalars['String'];
  name: Scalars['String'];
}>;


export type AdminCreateChapterMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateChapter: (
    { __typename?: 'Chapter' }
    & Pick<Chapter, '_id' | 'name' | 'status'>
  ) }
);

export type AdminUpdateChapterMutationVariables = Exact<{
  organizationId: Scalars['String'];
  chapterId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  status?: Maybe<ChapterStatus>;
}>;


export type AdminUpdateChapterMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateChapter: (
    { __typename?: 'Chapter' }
    & Pick<Chapter, '_id' | 'name' | 'status'>
  ) }
);

export type AdminDeleteChapterMutationVariables = Exact<{
  organizationId: Scalars['String'];
  chapterId: Scalars['String'];
}>;


export type AdminDeleteChapterMutation = (
  { __typename?: 'Mutation' }
  & { adminDeleteChapter: (
    { __typename?: 'Chapter' }
    & Pick<Chapter, '_id'>
  ) }
);

export type AdminCreateLessonMutationVariables = Exact<{
  organizationId: Scalars['String'];
  courseId: Scalars['String'];
  chapterId: Scalars['String'];
  name: Scalars['String'];
}>;


export type AdminCreateLessonMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateLesson: (
    { __typename?: 'Lesson' }
    & FetchLessonsFragment
  ) }
);

export type AdminUpdateLessonMutationVariables = Exact<{
  organizationId: Scalars['String'];
  lessonId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  status?: Maybe<LessonStatus>;
  contentBlocks?: Maybe<Array<ContentBlockInput> | ContentBlockInput>;
  liberationRule?: Maybe<LessonLiberationRuleInput>;
  expirationRule?: Maybe<DateConstraintInput>;
}>;


export type AdminUpdateLessonMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateLesson: (
    { __typename?: 'Lesson' }
    & FetchLessonsFragment
  ) }
);

export type AdminDeleteLessonMutationVariables = Exact<{
  organizationId: Scalars['String'];
  lessonId: Scalars['String'];
}>;


export type AdminDeleteLessonMutation = (
  { __typename?: 'Mutation' }
  & { adminDeleteLesson: (
    { __typename?: 'Lesson' }
    & Pick<Lesson, '_id'>
  ) }
);

export type AdminCreateQuestionnaireExamMutationVariables = Exact<{
  organizationId: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  questions?: Maybe<Array<QuestionInput> | QuestionInput>;
  maxRetryAmount?: Maybe<Scalars['Float']>;
  passingGrade?: Maybe<QuestionnairePassingGradeInput>;
  randomizeQuestions?: Maybe<Scalars['Boolean']>;
  timeLimit?: Maybe<Scalars['Float']>;
}>;


export type AdminCreateQuestionnaireExamMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateQuestionnaireExam: (
    { __typename?: 'QuestionnaireExam' }
    & Pick<QuestionnaireExam, '_id' | 'sharedId'>
  ) }
);

export type AdminCreateQuestionnaireQuizMutationVariables = Exact<{
  organizationId: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  passingGrade?: Maybe<QuestionnairePassingGradeInput>;
  questions?: Maybe<Array<QuestionInput> | QuestionInput>;
}>;


export type AdminCreateQuestionnaireQuizMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateQuestionnaireQuiz: (
    { __typename?: 'QuestionnaireQuiz' }
    & Pick<QuestionnaireQuiz, '_id' | 'sharedId'>
  ) }
);

export type AdminCreateQuestionnaireSurveyMutationVariables = Exact<{
  organizationId: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  questions?: Maybe<Array<QuestionInput> | QuestionInput>;
}>;


export type AdminCreateQuestionnaireSurveyMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateQuestionnaireSurvey: (
    { __typename?: 'QuestionnaireSurvey' }
    & Pick<QuestionnaireSurvey, '_id' | 'sharedId'>
  ) }
);

export type AdminUpdateQuestionnaireExamMutationVariables = Exact<{
  organizationId: Scalars['String'];
  questionnaireId: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  questions?: Maybe<Array<QuestionInput> | QuestionInput>;
  maxRetryAmount?: Maybe<Scalars['Float']>;
  passingGrade?: Maybe<QuestionnairePassingGradeInput>;
  randomizeQuestions?: Maybe<Scalars['Boolean']>;
  timeLimit?: Maybe<Scalars['Float']>;
}>;


export type AdminUpdateQuestionnaireExamMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateQuestionnaireExam: (
    { __typename?: 'QuestionnaireExam' }
    & Pick<QuestionnaireExam, '_id' | 'sharedId'>
  ) }
);

export type AdminUpdateQuestionnaireQuizMutationVariables = Exact<{
  organizationId: Scalars['String'];
  questionnaireId: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  passingGrade?: Maybe<QuestionnairePassingGradeInput>;
  questions?: Maybe<Array<QuestionInput> | QuestionInput>;
}>;


export type AdminUpdateQuestionnaireQuizMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateQuestionnaireQuiz: (
    { __typename?: 'QuestionnaireQuiz' }
    & Pick<QuestionnaireQuiz, '_id' | 'sharedId'>
  ) }
);

export type AdminUpdateQuestionnaireSurveyMutationVariables = Exact<{
  organizationId: Scalars['String'];
  questionnaireId: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  questions?: Maybe<Array<QuestionInput> | QuestionInput>;
}>;


export type AdminUpdateQuestionnaireSurveyMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateQuestionnaireSurvey: (
    { __typename?: 'QuestionnaireSurvey' }
    & Pick<QuestionnaireSurvey, '_id' | 'sharedId'>
  ) }
);

export type AdminCreateFilestackS3FileMutationVariables = Exact<{
  url: Scalars['String'];
  uploadId: Scalars['String'];
  source: Scalars['String'];
  size: Scalars['Float'];
  originalPath: Scalars['String'];
  originalName: Scalars['String'];
  key: Scalars['String'];
  handle: Scalars['String'];
  contentType: Scalars['String'];
  container: Scalars['String'];
  acl: FileAcl;
  organizationId: Scalars['String'];
}>;


export type AdminCreateFilestackS3FileMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateFilestackS3File: (
    { __typename?: 'FilestackS3File' }
    & FetchFileFragment
  ) }
);

export type AdminUpdateFileMutationVariables = Exact<{
  organizationId: Scalars['String'];
  fileId: Scalars['String'];
  altText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}>;


export type AdminUpdateFileMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateFile: (
    { __typename?: 'FilestackS3File' }
    & FetchFileFragment
  ) }
);

export type AdminGetHubspotTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type AdminGetHubspotTokenMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'adminUserGetHubspotToken'>
);

export type AdminCreateCheckoutMutationVariables = Exact<{
  description?: Maybe<Scalars['String']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  invoiceDiscounts: Array<InvoiceDiscountDiscriminatorInput> | InvoiceDiscountDiscriminatorInput;
  splitConfigId: Scalars['String'];
  organizationId: Scalars['String'];
  currency: Currency;
  invoiceItems: Array<InvoiceItemDiscriminatorInput> | InvoiceItemDiscriminatorInput;
  paymentMethodsConfig: CheckoutPaymentMethodsConfigInput;
}>;


export type AdminCreateCheckoutMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateCheckout: (
    { __typename?: 'Checkout' }
    & Pick<Checkout, '_id' | 'sharedId'>
  ) }
);

export type AdminUpdateCheckoutMutationVariables = Exact<{
  description?: Maybe<Scalars['String']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  splitConfigId?: Maybe<Scalars['String']>;
  currency?: Maybe<Currency>;
  status?: Maybe<CheckoutStatus>;
  invoiceItems?: Maybe<Array<InvoiceItemDiscriminatorInput> | InvoiceItemDiscriminatorInput>;
  invoiceDiscountMethods?: Maybe<Array<InvoiceDiscountMethodInput> | InvoiceDiscountMethodInput>;
  paymentMethodsConfig?: Maybe<CheckoutPaymentMethodsConfigInput>;
  checkoutId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminUpdateCheckoutMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateCheckout: (
    { __typename?: 'Checkout' }
    & Pick<Checkout, '_id'>
  ) }
);

export type AdminCreateInvoiceMutationVariables = Exact<{
  organizationId: Scalars['String'];
  expirationDate?: Maybe<Scalars['DateTime']>;
  currency: Currency;
  discounts: Array<InvoiceDiscountDiscriminatorInput> | InvoiceDiscountDiscriminatorInput;
  items: Array<InvoiceItemDiscriminatorInput> | InvoiceItemDiscriminatorInput;
  splitConfigId: Scalars['String'];
  studentUserId: Scalars['String'];
  userPaymentProfileId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
}>;


export type AdminCreateInvoiceMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateInvoice: (
    { __typename?: 'Invoice' }
    & Pick<Invoice, '_id'>
  ) }
);

export type AdminUpdateInvoiceMutationVariables = Exact<{
  organizationId: Scalars['String'];
  invoiceId: Scalars['String'];
  splitConfigId?: Maybe<Scalars['String']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<InvoiceStatus>;
  items?: Maybe<Array<InvoiceItemDiscriminatorInput> | InvoiceItemDiscriminatorInput>;
  discounts?: Maybe<Array<InvoiceDiscountMethodInput> | InvoiceDiscountMethodInput>;
  userPaymentProfileId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}>;


export type AdminUpdateInvoiceMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateInvoice: (
    { __typename?: 'Invoice' }
    & Pick<Invoice, '_id'>
  ) }
);

export type AdminCreateInvoicePaymentLinkMutationVariables = Exact<{
  organizationId: Scalars['String'];
  expirationDate?: Maybe<Scalars['DateTime']>;
  pix?: Maybe<InvoicePaymentLinkPixInput>;
  bankSlip?: Maybe<InvoicePaymentLinkBankSlipInput>;
  creditCard?: Maybe<InvoicePaymentLinkCreditCardInput>;
  invoiceId: Scalars['String'];
  amount: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
}>;


export type AdminCreateInvoicePaymentLinkMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateInvoicePaymentLink: (
    { __typename?: 'InvoicePaymentLink' }
    & Pick<InvoicePaymentLink, '_id'>
  ) }
);

export type AdminUpdateInvoicePaymentLinkMutationVariables = Exact<{
  organizationId: Scalars['String'];
  invoicePaymentLinkId: Scalars['String'];
  expirationDate?: Maybe<Scalars['DateTime']>;
  pix?: Maybe<InvoicePaymentLinkPixInput>;
  bankSlip?: Maybe<InvoicePaymentLinkBankSlipInput>;
  creditCard?: Maybe<InvoicePaymentLinkCreditCardInput>;
  amount: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
}>;


export type AdminUpdateInvoicePaymentLinkMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateInvoicePaymentLink: (
    { __typename?: 'InvoicePaymentLink' }
    & Pick<InvoicePaymentLink, '_id'>
  ) }
);

export type AdminCancelInvoicePaymentLinkMutationVariables = Exact<{
  organizationId: Scalars['String'];
  invoicePaymentLinkId: Scalars['String'];
}>;


export type AdminCancelInvoicePaymentLinkMutation = (
  { __typename?: 'Mutation' }
  & { adminCancelInvoicePaymentLink: (
    { __typename?: 'InvoicePaymentLink' }
    & Pick<InvoicePaymentLink, '_id'>
  ) }
);

export type AdminAttachPaymentToInvoiceMutationVariables = Exact<{
  organizationId: Scalars['String'];
  invoiceId: Scalars['String'];
  paymentId: Scalars['String'];
}>;


export type AdminAttachPaymentToInvoiceMutation = (
  { __typename?: 'Mutation' }
  & { adminAttachPaymentToInvoice: (
    { __typename?: 'PaymentInvoiceResponse' }
    & { payment: (
      { __typename?: 'BankSlipPayment' }
      & Pick<BankSlipPayment, '_id'>
    ) | (
      { __typename?: 'CreditCardPayment' }
      & Pick<CreditCardPayment, '_id'>
    ) | (
      { __typename?: 'MoneyPayment' }
      & Pick<MoneyPayment, '_id'>
    ) | (
      { __typename?: 'PixPayment' }
      & Pick<PixPayment, '_id'>
    ), invoice: (
      { __typename?: 'Invoice' }
      & Pick<Invoice, '_id'>
    ) }
  ) }
);

export type AdminAttachPaymentScheduleToInvoiceMutationVariables = Exact<{
  invoiceId: Scalars['String'];
  paymentScheduleId?: Maybe<Scalars['String']>;
  paymentScheduleSharedId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
}>;


export type AdminAttachPaymentScheduleToInvoiceMutation = (
  { __typename?: 'Mutation' }
  & { adminAttachPaymentScheduleToInvoice: (
    { __typename?: 'PaymentScheduleInvoiceResponse' }
    & { paymentSchedule: (
      { __typename?: 'PaymentSchedule' }
      & Pick<PaymentSchedule, '_id'>
    ), invoice: (
      { __typename?: 'Invoice' }
      & Pick<Invoice, '_id'>
    ) }
  ) }
);

export type AdminDetachPaymentFromInvoiceMutationVariables = Exact<{
  organizationId: Scalars['String'];
  paymentId: Scalars['String'];
}>;


export type AdminDetachPaymentFromInvoiceMutation = (
  { __typename?: 'Mutation' }
  & { adminDetachPaymentFromInvoice: (
    { __typename?: 'PaymentInvoiceResponse' }
    & { payment: (
      { __typename?: 'BankSlipPayment' }
      & Pick<BankSlipPayment, '_id'>
    ) | (
      { __typename?: 'CreditCardPayment' }
      & Pick<CreditCardPayment, '_id'>
    ) | (
      { __typename?: 'MoneyPayment' }
      & Pick<MoneyPayment, '_id'>
    ) | (
      { __typename?: 'PixPayment' }
      & Pick<PixPayment, '_id'>
    ), invoice: (
      { __typename?: 'Invoice' }
      & Pick<Invoice, '_id'>
    ) }
  ) }
);

export type AdminAttachUserToInvoiceAccessesMutationVariables = Exact<{
  organizationId: Scalars['String'];
  invoiceId: Scalars['String'];
  studentUserId: Scalars['String'];
  invoiceAccessIds: Array<Scalars['String']> | Scalars['String'];
  liberationRule: InvoiceAccessLiberationRuleType;
}>;


export type AdminAttachUserToInvoiceAccessesMutation = (
  { __typename?: 'Mutation' }
  & { adminAttachUserToInvoiceAccesses: (
    { __typename?: 'AttachUserToInvoiceAccessesResponse' }
    & Pick<AttachUserToInvoiceAccessesResponse, 'status'>
  ) }
);

export type AdminDetachUserFromInvoiceAccessMutationVariables = Exact<{
  organizationId: Scalars['String'];
  invoiceAccessId: Scalars['String'];
}>;


export type AdminDetachUserFromInvoiceAccessMutation = (
  { __typename?: 'Mutation' }
  & { adminDetachUserFromInvoiceAccess: (
    { __typename?: 'InvoiceAccess' }
    & Pick<InvoiceAccess, '_id' | 'status'>
  ) }
);

export type AdminSuspendInvoiceAccessMutationVariables = Exact<{
  organizationId: Scalars['String'];
  invoiceAccessId: Scalars['String'];
}>;


export type AdminSuspendInvoiceAccessMutation = (
  { __typename?: 'Mutation' }
  & { adminSuspendInvoiceAccess: (
    { __typename?: 'InvoiceAccess' }
    & Pick<InvoiceAccess, '_id'>
  ) }
);

export type AdminGrantInvoiceAccessMutationVariables = Exact<{
  organizationId: Scalars['String'];
  invoiceAccessId: Scalars['String'];
}>;


export type AdminGrantInvoiceAccessMutation = (
  { __typename?: 'Mutation' }
  & { adminGrantInvoiceAccess: (
    { __typename?: 'InvoiceAccess' }
    & Pick<InvoiceAccess, '_id'>
  ) }
);

export type AdminCreateUserPaymentProfileMutationVariables = Exact<{
  organizationId: Scalars['String'];
  studentUserId: Scalars['String'];
  name: Scalars['String'];
  type: LegalPersonType;
  country: CountryIsoCode;
  address?: Maybe<AddressInput>;
  currency: Currency;
  taxIds?: Maybe<Array<TaxIdInput> | TaxIdInput>;
}>;


export type AdminCreateUserPaymentProfileMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateUserPaymentProfile: (
    { __typename?: 'UserPaymentProfile' }
    & FetchPaymentProfileFragmentFragment
  ) }
);

export type AdminUpdateUserPaymentProfileMutationVariables = Exact<{
  organizationId: Scalars['String'];
  userPaymentProfileId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<LegalPersonType>;
  country?: Maybe<CountryIsoCode>;
  address?: Maybe<AddressInput>;
  taxIds?: Maybe<Array<TaxIdInput> | TaxIdInput>;
}>;


export type AdminUpdateUserPaymentProfileMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateUserPaymentProfile: (
    { __typename?: 'UserPaymentProfile' }
    & FetchPaymentProfileFragmentFragment
  ) }
);

export type AdminCreatePaymentMutationVariables = Exact<{
  cardId?: Maybe<Scalars['String']>;
  cardToken?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  installments?: Maybe<Scalars['Int']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  amount: Scalars['Int'];
  studentUserId: Scalars['String'];
  splitConfigId: Scalars['String'];
  organizationId: Scalars['String'];
  currency: Currency;
  userPaymentProfileId: Scalars['String'];
  paymentMethod: PaymentMethod;
  invoiceId?: Maybe<Scalars['String']>;
}>;


export type AdminCreatePaymentMutation = (
  { __typename?: 'Mutation' }
  & { adminCreatePayment: (
    { __typename?: 'BankSlipPayment' }
    & FetchPaymentFragment_BankSlipPayment_Fragment
  ) | (
    { __typename?: 'CreditCardPayment' }
    & FetchPaymentFragment_CreditCardPayment_Fragment
  ) | (
    { __typename?: 'MoneyPayment' }
    & FetchPaymentFragment_MoneyPayment_Fragment
  ) | (
    { __typename?: 'PixPayment' }
    & FetchPaymentFragment_PixPayment_Fragment
  ) }
);

export type AdminUpdatePaymentMutationVariables = Exact<{
  organizationId: Scalars['String'];
  paymentId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
}>;


export type AdminUpdatePaymentMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdatePayment: (
    { __typename?: 'BankSlipPayment' }
    & Pick<BankSlipPayment, '_id' | 'description'>
  ) | (
    { __typename?: 'CreditCardPayment' }
    & Pick<CreditCardPayment, '_id' | 'description'>
  ) | (
    { __typename?: 'MoneyPayment' }
    & Pick<MoneyPayment, '_id' | 'description'>
  ) | (
    { __typename?: 'PixPayment' }
    & Pick<PixPayment, '_id' | 'description'>
  ) }
);

export type AdminRefundPaymentMutationVariables = Exact<{
  organizationId: Scalars['String'];
  paymentId: Scalars['String'];
  refundAmount: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  bankAccount?: Maybe<RefundPaymentBankAccountInput>;
  reason: RefundReason;
}>;


export type AdminRefundPaymentMutation = (
  { __typename?: 'Mutation' }
  & { adminRefundPayment: (
    { __typename?: 'RefundPaymentResponse' }
    & { refund: (
      { __typename?: 'Refund' }
      & Pick<Refund, '_id'>
    ) }
  ) }
);

export type AdminCancelRefundMutationVariables = Exact<{
  organizationId: Scalars['String'];
  refundId: Scalars['String'];
}>;


export type AdminCancelRefundMutation = (
  { __typename?: 'Mutation' }
  & { adminCancelRefund: (
    { __typename?: 'Refund' }
    & Pick<Refund, '_id'>
  ) }
);

export type AdminAttachPaymentToInvoiceInvoicesMutationVariables = Exact<{
  paymentId: Scalars['String'];
  invoiceId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminAttachPaymentToInvoiceInvoicesMutation = (
  { __typename?: 'Mutation' }
  & { adminAttachPaymentToInvoice: (
    { __typename?: 'PaymentInvoiceResponse' }
    & { payment: (
      { __typename?: 'BankSlipPayment' }
      & Pick<BankSlipPayment, '_id'>
    ) | (
      { __typename?: 'CreditCardPayment' }
      & Pick<CreditCardPayment, '_id'>
    ) | (
      { __typename?: 'MoneyPayment' }
      & Pick<MoneyPayment, '_id'>
    ) | (
      { __typename?: 'PixPayment' }
      & Pick<PixPayment, '_id'>
    ), invoice: (
      { __typename?: 'Invoice' }
      & Pick<Invoice, '_id'>
    ) }
  ) }
);

export type AdminDetachPaymentScheduleFromInvoiceMutationVariables = Exact<{
  paymentScheduleId?: Maybe<Scalars['String']>;
  paymentScheduleSharedId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
}>;


export type AdminDetachPaymentScheduleFromInvoiceMutation = (
  { __typename?: 'Mutation' }
  & { adminDetachPaymentScheduleFromInvoice: (
    { __typename?: 'PaymentSchedule' }
    & Pick<PaymentSchedule, '_id'>
  ) }
);

export type AdminGeneratePaymentSchedulesMutationVariables = Exact<{
  cardId?: Maybe<Scalars['String']>;
  invoiceId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  firstPaymentExpirationDate?: Maybe<Scalars['DateTime']>;
  paymentExpirationDayInMonth?: Maybe<Scalars['Int']>;
  paymentGenerationDayInMonth?: Maybe<Scalars['Int']>;
  cardToken?: Maybe<Scalars['String']>;
  paymentGenerationDaysBeforeExpiration?: Maybe<Scalars['Int']>;
  firstPaymentGenerationDate?: Maybe<Scalars['DateTime']>;
  amount: Scalars['Int'];
  splitConfigId: Scalars['String'];
  studentUserId: Scalars['String'];
  organizationId: Scalars['String'];
  userPaymentProfileId: Scalars['String'];
  installments: Scalars['Int'];
  paymentMethod: PaymentSchedulePaymentMethod;
}>;


export type AdminGeneratePaymentSchedulesMutation = (
  { __typename?: 'Mutation' }
  & { adminGeneratePaymentSchedules: (
    { __typename?: 'GeneratePaymentSchedulesResponse' }
    & Pick<GeneratePaymentSchedulesResponse, 'status'>
  ) }
);

export type AdminUpdatePaymentScheduleMutationVariables = Exact<{
  cardId?: Maybe<Scalars['String']>;
  cardToken?: Maybe<Scalars['String']>;
  invoiceId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  paymentSchedules: Array<PaymentSchedulesUpdateInput> | PaymentSchedulesUpdateInput;
  amount?: Maybe<Scalars['Int']>;
  paymentMethod?: Maybe<PaymentSchedulePaymentMethod>;
  splitConfigId?: Maybe<Scalars['String']>;
  studentUserId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  userPaymentProfileId?: Maybe<Scalars['String']>;
  paymentScheduleSharedId: Scalars['String'];
}>;


export type AdminUpdatePaymentScheduleMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdatePaymentSchedule: Array<(
    { __typename?: 'PaymentSchedule' }
    & Pick<PaymentSchedule, 'status'>
  )> }
);

export type AdminCancelPaymentMutationVariables = Exact<{
  organizationId: Scalars['String'];
  paymentId: Scalars['String'];
}>;


export type AdminCancelPaymentMutation = (
  { __typename?: 'Mutation' }
  & { adminCancelPayment: (
    { __typename?: 'BankSlipPayment' }
    & Pick<BankSlipPayment, '_id' | 'status'>
  ) | (
    { __typename?: 'CreditCardPayment' }
    & Pick<CreditCardPayment, '_id' | 'status'>
  ) | (
    { __typename?: 'MoneyPayment' }
    & Pick<MoneyPayment, '_id' | 'status'>
  ) | (
    { __typename?: 'PixPayment' }
    & Pick<PixPayment, '_id' | 'status'>
  ) }
);

export type AdminCancelPaymentScheduleMutationVariables = Exact<{
  organizationId: Scalars['String'];
  paymentScheduleId?: Maybe<Scalars['String']>;
  paymentScheduleSharedId?: Maybe<Scalars['String']>;
}>;


export type AdminCancelPaymentScheduleMutation = (
  { __typename?: 'Mutation' }
  & { adminCancelPaymentSchedule: Array<(
    { __typename?: 'PaymentSchedule' }
    & Pick<PaymentSchedule, '_id' | 'status'>
  )> }
);

export type CreateRecipientMutationVariables = Exact<{
  country: CountryIsoCode;
  taxIds?: Maybe<Array<TaxIdInput> | TaxIdInput>;
  type: LegalPersonType;
  name: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type CreateRecipientMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateRecipient: (
    { __typename?: 'Recipient' }
    & Pick<Recipient, '_id'>
  ) }
);

export type UpdateRecipientMutationVariables = Exact<{
  recipientId: Scalars['String'];
  name: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type UpdateRecipientMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateRecipient: (
    { __typename?: 'Recipient' }
    & Pick<Recipient, '_id'>
  ) }
);

export type CreateBankAccountMutationVariables = Exact<{
  currency: Currency;
  country: CountryIsoCode;
  accountType: BankAccountType;
  branchDigit?: Maybe<Scalars['String']>;
  branchNumber: Scalars['String'];
  accountDigit: Scalars['String'];
  accountNumber: Scalars['String'];
  bankId: Scalars['String'];
  recipientId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type CreateBankAccountMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateRecipientBankAccount: (
    { __typename?: 'BankAccount' }
    & Pick<BankAccount, '_id'>
  ) }
);

export type UpdateBankAccountMutationVariables = Exact<{
  currency: Currency;
  country: CountryIsoCode;
  accountType: BankAccountType;
  branchDigit?: Maybe<Scalars['String']>;
  branchNumber: Scalars['String'];
  accountDigit: Scalars['String'];
  accountNumber: Scalars['String'];
  bankId: Scalars['String'];
  bankAccountId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type UpdateBankAccountMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateRecipientBankAccount: (
    { __typename?: 'BankAccount' }
    & Pick<BankAccount, '_id'>
  ) }
);

export type DeleteBankAccountMutationVariables = Exact<{
  bankAccountId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type DeleteBankAccountMutation = (
  { __typename?: 'Mutation' }
  & { adminDeleteRecipientBankAccount: (
    { __typename?: 'BankAccount' }
    & Pick<BankAccount, '_id'>
  ) }
);

export type AdminCreateWithdrawalMutationVariables = Exact<{
  organizationId: Scalars['String'];
  recipientId: Scalars['String'];
  bankAccountId: Scalars['String'];
  amount: Scalars['Int'];
  currency: Currency;
}>;


export type AdminCreateWithdrawalMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateWithdrawal: (
    { __typename?: 'Withdrawal' }
    & Pick<Withdrawal, '_id'>
  ) }
);

export type AdminCancelWithdrawalMutationVariables = Exact<{
  organizationId: Scalars['String'];
  withdrawalId: Scalars['String'];
}>;


export type AdminCancelWithdrawalMutation = (
  { __typename?: 'Mutation' }
  & { adminCancelWithdrawal: (
    { __typename?: 'Withdrawal' }
    & Pick<Withdrawal, '_id'>
  ) }
);

export type AdminSimulateAnticipationMutationVariables = Exact<{
  organizationId: Scalars['String'];
  recipientId: Scalars['String'];
  amount: Scalars['Int'];
  timeframe: AnticipationTimeframe;
}>;


export type AdminSimulateAnticipationMutation = (
  { __typename?: 'Mutation' }
  & { adminSimulateAnticipation: (
    { __typename?: 'SimulateAnticipationResponse' }
    & Pick<SimulateAnticipationResponse, 'timeframe' | 'anticipationFee' | 'amount' | 'fee' | 'paymentDate'>
  ) }
);

export type AdminCreateAnticipationMutationVariables = Exact<{
  organizationId: Scalars['String'];
  recipientId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  currency: Currency;
  amount: Scalars['Int'];
  timeframe: AnticipationTimeframe;
}>;


export type AdminCreateAnticipationMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateAnticipation: (
    { __typename?: 'Anticipation' }
    & Pick<Anticipation, '_id'>
  ) }
);

export type AdminCancelAnticipationMutationVariables = Exact<{
  organizationId: Scalars['String'];
  anticipationId: Scalars['String'];
}>;


export type AdminCancelAnticipationMutation = (
  { __typename?: 'Mutation' }
  & { adminCancelAnticipation: (
    { __typename?: 'Anticipation' }
    & Pick<Anticipation, '_id'>
  ) }
);

export type AdminCreateUserCardMutationVariables = Exact<{
  organizationId: Scalars['String'];
  studentUserId: Scalars['String'];
  cardHash: Scalars['String'];
}>;


export type AdminCreateUserCardMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateUserCard: (
    { __typename?: 'Card' }
    & FetchUserCardsFragment
  ) }
);

export type AdminDeleteUserCardMutationVariables = Exact<{
  organizationId: Scalars['String'];
  cardId: Scalars['String'];
}>;


export type AdminDeleteUserCardMutation = (
  { __typename?: 'Mutation' }
  & { adminDeleteUserCard: (
    { __typename?: 'Card' }
    & Pick<Card, '_id'>
  ) }
);

export type AdminCreateAccessProductMutationVariables = Exact<{
  organizationId: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  unitLabel?: Maybe<Scalars['String']>;
  accesses: Array<ProductAccessDiscriminatorInput> | ProductAccessDiscriminatorInput;
  accessExpirationRule?: Maybe<AccessExpirationRuleDiscriminatorInput>;
  prices: Array<ProductPriceInput> | ProductPriceInput;
}>;


export type AdminCreateAccessProductMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateAccessProduct: (
    { __typename?: 'AccessProduct' }
    & Pick<AccessProduct, '_id'>
  ) }
);

export type AdminUpdateAccessProductMutationVariables = Exact<{
  organizationId: Scalars['String'];
  productId: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  unitLabel?: Maybe<Scalars['String']>;
  accesses?: Maybe<Array<ProductAccessDiscriminatorInput> | ProductAccessDiscriminatorInput>;
  accessExpirationRule?: Maybe<AccessExpirationRuleDiscriminatorInput>;
  prices?: Maybe<Array<ProductPriceMethodInput> | ProductPriceMethodInput>;
}>;


export type AdminUpdateAccessProductMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateAccessProduct: (
    { __typename?: 'AccessProduct' }
    & Pick<AccessProduct, '_id'>
  ) }
);

export type AdminCreateOtherProductMutationVariables = Exact<{
  organizationId: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  unitLabel?: Maybe<Scalars['String']>;
  prices: Array<ProductPriceInput> | ProductPriceInput;
}>;


export type AdminCreateOtherProductMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateOtherProduct: (
    { __typename?: 'OtherProduct' }
    & Pick<OtherProduct, '_id'>
  ) }
);

export type AdminUpdateOtherProductMutationVariables = Exact<{
  organizationId: Scalars['String'];
  productId: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  unitLabel?: Maybe<Scalars['String']>;
  prices?: Maybe<Array<ProductPriceMethodInput> | ProductPriceMethodInput>;
}>;


export type AdminUpdateOtherProductMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateOtherProduct: (
    { __typename?: 'OtherProduct' }
    & Pick<OtherProduct, '_id'>
  ) }
);

export type AdminArchiveProductMutationVariables = Exact<{
  organizationId: Scalars['String'];
  productId: Scalars['String'];
}>;


export type AdminArchiveProductMutation = (
  { __typename?: 'Mutation' }
  & { adminArchiveProduct: (
    { __typename?: 'AccessProduct' }
    & Pick<AccessProduct, '_id'>
  ) | (
    { __typename?: 'OtherProduct' }
    & Pick<OtherProduct, '_id'>
  ) }
);

export type AdminUnarchiveProductMutationVariables = Exact<{
  organizationId: Scalars['String'];
  productId: Scalars['String'];
}>;


export type AdminUnarchiveProductMutation = (
  { __typename?: 'Mutation' }
  & { adminUnarchiveProduct: (
    { __typename?: 'AccessProduct' }
    & Pick<AccessProduct, '_id'>
  ) | (
    { __typename?: 'OtherProduct' }
    & Pick<OtherProduct, '_id'>
  ) }
);

export type AdminDeleteProductMutationVariables = Exact<{
  organizationId: Scalars['String'];
  productId: Scalars['String'];
}>;


export type AdminDeleteProductMutation = (
  { __typename?: 'Mutation' }
  & { adminDeleteProduct: (
    { __typename?: 'AccessProduct' }
    & Pick<AccessProduct, '_id'>
  ) | (
    { __typename?: 'OtherProduct' }
    & Pick<OtherProduct, '_id'>
  ) }
);

export type AdminArchiveProductPriceMutationVariables = Exact<{
  organizationId: Scalars['String'];
  productId: Scalars['String'];
  priceId: Scalars['String'];
}>;


export type AdminArchiveProductPriceMutation = (
  { __typename?: 'Mutation' }
  & { adminArchiveProductPrice: (
    { __typename?: 'AccessProduct' }
    & Pick<AccessProduct, '_id'>
  ) | (
    { __typename?: 'OtherProduct' }
    & Pick<OtherProduct, '_id'>
  ) }
);

export type AdminUnarchiveProductPriceMutationVariables = Exact<{
  organizationId: Scalars['String'];
  productId: Scalars['String'];
  priceId: Scalars['String'];
}>;


export type AdminUnarchiveProductPriceMutation = (
  { __typename?: 'Mutation' }
  & { adminUnarchiveProductPrice: (
    { __typename?: 'AccessProduct' }
    & Pick<AccessProduct, '_id'>
  ) | (
    { __typename?: 'OtherProduct' }
    & Pick<OtherProduct, '_id'>
  ) }
);

export type AdminCreateReportQuestionnaireAnswersV1MutationVariables = Exact<{
  courseIds: Array<Scalars['String']> | Scalars['String'];
  studentIds: Array<Scalars['String']> | Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminCreateReportQuestionnaireAnswersV1Mutation = (
  { __typename?: 'Mutation' }
  & { adminCreateReportQuestionnaireAnswersV1: (
    { __typename?: 'QuestionnaireAnswersV1Report' }
    & Pick<QuestionnaireAnswersV1Report, '_id'>
  ) }
);

export type AdminCreateReportUsersProgressV1MutationVariables = Exact<{
  courseIds: Array<Scalars['String']> | Scalars['String'];
  studentIds: Array<Scalars['String']> | Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminCreateReportUsersProgressV1Mutation = (
  { __typename?: 'Mutation' }
  & { adminCreateReportUsersProgressV1: (
    { __typename?: 'UsersProgressV1Report' }
    & Pick<UsersProgressV1Report, '_id'>
  ) }
);

export type AdminCreateRoomMutationVariables = Exact<{
  organizationId: Scalars['String'];
  courseId: Scalars['String'];
  name: Scalars['String'];
}>;


export type AdminCreateRoomMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateRoom: (
    { __typename?: 'Room' }
    & FetchRoomFragment
  ) }
);

export type AdminUpdateRoomMutationVariables = Exact<{
  organizationId: Scalars['String'];
  roomId: Scalars['String'];
  name: Scalars['String'];
  expirationRule?: Maybe<DateConstraintInput>;
  liberationRule?: Maybe<DateConstraintInput>;
}>;


export type AdminUpdateRoomMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateRoom: (
    { __typename?: 'Room' }
    & FetchRoomFragment
  ) }
);

export type AdminCreateStudentUserMutationVariables = Exact<{
  organizationId: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberCountry?: Maybe<CountryIsoCode>;
  password?: Maybe<Scalars['String']>;
  suppressCommunication?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<Array<StudentUserRole> | StudentUserRole>;
}>;


export type AdminCreateStudentUserMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateStudentUser: (
    { __typename?: 'AdminCreateStudentResponse' }
    & Pick<AdminCreateStudentResponse, 'magicLink'>
    & { studentUser: (
      { __typename?: 'StudentUser' }
      & FetchStudentFragment
    ) }
  ) }
);

export type AdminUpdateStudentUserMutationVariables = Exact<{
  organizationId: Scalars['String'];
  studentUserId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberCountry?: Maybe<CountryIsoCode>;
  password?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  definePasswordNextAccess?: Maybe<Scalars['Boolean']>;
}>;


export type AdminUpdateStudentUserMutation = (
  { __typename?: 'Mutation' }
  & { adminUpdateStudentUser: (
    { __typename?: 'StudentUser' }
    & FetchStudentFragment
  ) }
);

export type AdminCreateEnrolmentMutationVariables = Exact<{
  organizationId: Scalars['String'];
  studentUserId: Scalars['String'];
  roomId: Scalars['String'];
  courseId: Scalars['String'];
}>;


export type AdminCreateEnrolmentMutation = (
  { __typename?: 'Mutation' }
  & { adminCreateEnrolment: (
    { __typename?: 'Enrolment' }
    & FetchEnrolmentFragment
  ) }
);

export type AdminDeleteEnrolmentMutationVariables = Exact<{
  organizationId: Scalars['String'];
  enrolmentId: Scalars['String'];
}>;


export type AdminDeleteEnrolmentMutation = (
  { __typename?: 'Mutation' }
  & { adminDeleteEnrolment: (
    { __typename?: 'Enrolment' }
    & Pick<Enrolment, '_id'>
  ) }
);

export type StudentUpdateProgressMutationVariables = Exact<{
  courseId: Scalars['String'];
  lessonId: Scalars['String'];
  rating?: Maybe<Scalars['Float']>;
  completed?: Maybe<Scalars['Boolean']>;
}>;


export type StudentUpdateProgressMutation = (
  { __typename?: 'Mutation' }
  & { studentUpdateProgress: (
    { __typename?: 'UserProgress' }
    & FetchUserProgressFragment
  ) }
);

export type StudentUpdateCourseStateMutationVariables = Exact<{
  courseId: Scalars['String'];
  lastLessonId: Scalars['String'];
  lastVideoSeconds?: Maybe<Scalars['Float']>;
}>;


export type StudentUpdateCourseStateMutation = (
  { __typename?: 'Mutation' }
  & { studentUpdateCourseState: (
    { __typename?: 'UserCourseState' }
    & FetchUserStateFragment
  ) }
);

export type StudentUpsertQuestionnaireAnswerMutationVariables = Exact<{
  courseId: Scalars['String'];
  lessonId: Scalars['String'];
  questionnaireId: Scalars['String'];
  answers: Array<AnswerInput> | AnswerInput;
  startedAt: Scalars['DateTime'];
}>;


export type StudentUpsertQuestionnaireAnswerMutation = (
  { __typename?: 'Mutation' }
  & { studentUpsertQuestionnaireAnswer: (
    { __typename?: 'UserQuestionnaireAnswer' }
    & Pick<UserQuestionnaireAnswer, '_id' | 'completedAt'>
  ) }
);

export type AdminFetchOrganizationsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminFetchOrganizationsQuery = (
  { __typename?: 'Query' }
  & { adminFetchOrganizations: (
    { __typename?: 'PaginatedOrganizationResponse' }
    & Pick<PaginatedOrganizationResponse, 'currentPage' | 'hasNextPage' | 'totalPageCount' | 'totalResultCount'>
    & { results: Array<(
      { __typename?: 'Organization' }
      & FetchOrganizationFragment
    )> }
  ) }
);

export type FetchOrganizationQueryVariables = Exact<{
  hostname?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
}>;


export type FetchOrganizationQuery = (
  { __typename?: 'Query' }
  & { fetchOrganization: (
    { __typename?: 'Organization' }
    & FetchOrganizationFragment
  ) }
);

export type StudentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type StudentUserQuery = (
  { __typename?: 'Query' }
  & { studentUser: (
    { __typename?: 'StudentUser' }
    & Pick<StudentUser, '_id' | 'name'>
    & { organization: (
      { __typename?: 'Organization' }
      & FetchOrganizationFragment
    ) }
  ) }
);

export type AdminFetchPoliciesQueryVariables = Exact<{
  organizationId: Scalars['String'];
}>;


export type AdminFetchPoliciesQuery = (
  { __typename?: 'Query' }
  & { adminFetchPolicies: (
    { __typename?: 'PaginatedPolicyResponse' }
    & Pick<PaginatedPolicyResponse, 'currentPage' | 'hasNextPage' | 'totalPageCount' | 'totalResultCount'>
    & { results: Array<(
      { __typename?: 'Policy' }
      & FetchPoliciesFragment
    )> }
  ) }
);

export type AdminFetchMemberQueryVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
}>;


export type AdminFetchMemberQuery = (
  { __typename?: 'Query' }
  & { adminFetchMember?: Maybe<(
    { __typename?: 'Member' }
    & FetchMemberFragment
  )> }
);

export type AdminFetchMembersQueryVariables = Exact<{
  organizationId: Scalars['String'];
  userIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  memberIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  paginationArgs?: Maybe<PagePaginationInput>;
  filterInputText?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Array<MemberOrderByInput> | MemberOrderByInput>;
}>;


export type AdminFetchMembersQuery = (
  { __typename?: 'Query' }
  & { adminFetchMembers: (
    { __typename?: 'PaginatedMemberResponse' }
    & Pick<PaginatedMemberResponse, 'currentPage' | 'totalPageCount' | 'totalResultCount' | 'hasNextPage'>
    & { results: Array<(
      { __typename?: 'Member' }
      & FetchMemberFragment
    )> }
  ) }
);

export type AdminFetchCertificateTemplatesQueryVariables = Exact<{
  organizationId: Scalars['String'];
}>;


export type AdminFetchCertificateTemplatesQuery = (
  { __typename?: 'Query' }
  & { adminFetchCertificateTemplates: Array<(
    { __typename?: 'CertificateTemplate' }
    & FetchCertificateTemplatesFragmentFragment
  )> }
);

export type AdminFetchCertificateTemplateQueryVariables = Exact<{
  organizationId: Scalars['String'];
  certificateTemplateId?: Maybe<Scalars['String']>;
  certificateTemplateSharedId?: Maybe<Scalars['String']>;
}>;


export type AdminFetchCertificateTemplateQuery = (
  { __typename?: 'Query' }
  & { adminFetchCertificateTemplate?: Maybe<(
    { __typename?: 'CertificateTemplate' }
    & FetchCertificateTemplateFragmentFragment
  )> }
);

export type AdminFetchCertificatesQueryVariables = Exact<{
  organizationId: Scalars['String'];
  orderBy?: Maybe<Array<CertificateOrderByInput> | CertificateOrderByInput>;
  pagination?: Maybe<PagePaginationInput>;
}>;


export type AdminFetchCertificatesQuery = (
  { __typename?: 'Query' }
  & { adminFetchCertificates: (
    { __typename?: 'PaginatedCertificateResponse' }
    & FetchCertificatesListFragmentFragment
  ) }
);

export type AdminFetchCertificateQueryVariables = Exact<{
  organizationId: Scalars['String'];
  certificateId: Scalars['String'];
}>;


export type AdminFetchCertificateQuery = (
  { __typename?: 'Query' }
  & { adminFetchCertificate?: Maybe<(
    { __typename?: 'Certificate' }
    & FetchCertificatesFragmentFragment
  )> }
);

export type FetchCertificateQueryVariables = Exact<{
  certificateSharedId: Scalars['String'];
}>;


export type FetchCertificateQuery = (
  { __typename?: 'Query' }
  & { fetchCertificate?: Maybe<(
    { __typename?: 'Certificate' }
    & FetchCertificatesFragmentFragment
  )> }
);

export type StudentFetchCertificatesQueryVariables = Exact<{
  courseIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  orderBy?: Maybe<Array<CertificateOrderByInput> | CertificateOrderByInput>;
}>;


export type StudentFetchCertificatesQuery = (
  { __typename?: 'Query' }
  & { studentFetchCertificates: Array<(
    { __typename?: 'Certificate' }
    & Pick<Certificate, '_id' | 'sharedId' | 'pageUrl'>
  )> }
);

export type BanksForSelectQueryVariables = Exact<{
  orderBy?: Maybe<Array<BankOrderByInput> | BankOrderByInput>;
  organizationId: Scalars['String'];
  where?: Maybe<BankWhereInput>;
}>;


export type BanksForSelectQuery = (
  { __typename?: 'Query' }
  & { banksForSelect: (
    { __typename?: 'PaginatedBankResponse' }
    & { results: Array<(
      { __typename?: 'Bank' }
      & Pick<Bank, '_id' | 'name' | 'code'>
    )> }
  ) }
);

export type RecipientsForSelectQueryVariables = Exact<{
  organizationId: Scalars['String'];
  pagination?: Maybe<PagePaginationInput>;
  orderBy?: Maybe<Array<RecipientOrderByInput> | RecipientOrderByInput>;
  where?: Maybe<RecipientWhereInput>;
}>;


export type RecipientsForSelectQuery = (
  { __typename?: 'Query' }
  & { recipientsForSelect: (
    { __typename?: 'PaginatedRecipientResponse' }
    & { results: Array<(
      { __typename?: 'Recipient' }
      & Pick<Recipient, '_id' | 'createdAt' | 'name'>
      & { taxIds?: Maybe<Array<(
        { __typename?: 'TaxId' }
        & Pick<TaxId, 'type' | 'value'>
      )>> }
    )> }
  ) }
);

export type StudentsForSelectQueryVariables = Exact<{
  organizationId: Scalars['String'];
  pagination?: Maybe<PagePaginationInput>;
  where?: Maybe<StudentUserWhereInput>;
  orderBy?: Maybe<Array<StudentUserOrderByInput> | StudentUserOrderByInput>;
}>;


export type StudentsForSelectQuery = (
  { __typename?: 'Query' }
  & { studentsForSelect: (
    { __typename?: 'PaginatedStudentUserResponse' }
    & { results: Array<(
      { __typename?: 'StudentUser' }
      & Pick<StudentUser, '_id' | 'name'>
    )> }
  ) }
);

export type AdminFetchCoursesQueryVariables = Exact<{
  organizationId: Scalars['String'];
  orderBy?: Maybe<Array<CourseOrderByInput> | CourseOrderByInput>;
  paginationArgs?: Maybe<CoursePaginationInput>;
  filterArgs?: Maybe<CourseWhereInput>;
}>;


export type AdminFetchCoursesQuery = (
  { __typename?: 'Query' }
  & { adminFetchCourses: (
    { __typename?: 'PaginatedCourseResponse' }
    & Pick<PaginatedCourseResponse, 'currentPage' | 'hasNextPage' | 'totalPageCount' | 'totalResultCount'>
    & { results: Array<(
      { __typename?: 'Course' }
      & FetchCoursesFragment
    )> }
  ) }
);

export type AdminFetchCourseQueryVariables = Exact<{
  organizationId: Scalars['String'];
  courseId: Scalars['String'];
}>;


export type AdminFetchCourseQuery = (
  { __typename?: 'Query' }
  & { adminFetchCourse?: Maybe<(
    { __typename?: 'Course' }
    & FetchCourseFragment
  )> }
);

export type AdminFetchLessonQueryVariables = Exact<{
  organizationId: Scalars['String'];
  lessonId: Scalars['String'];
}>;


export type AdminFetchLessonQuery = (
  { __typename?: 'Query' }
  & { adminFetchLesson?: Maybe<(
    { __typename?: 'Lesson' }
    & FetchLessonFragment
  )> }
);

export type AdminFetchQuestionnaireQueryVariables = Exact<{
  organizationId: Scalars['String'];
  questionnaireId: Scalars['String'];
}>;


export type AdminFetchQuestionnaireQuery = (
  { __typename?: 'Query' }
  & { adminFetchQuestionnaire?: Maybe<(
    { __typename?: 'QuestionnaireExam' }
    & FetchQuestionnaire_QuestionnaireExam_Fragment
  ) | (
    { __typename?: 'QuestionnaireQuiz' }
    & FetchQuestionnaire_QuestionnaireQuiz_Fragment
  ) | (
    { __typename?: 'QuestionnaireSurvey' }
    & FetchQuestionnaire_QuestionnaireSurvey_Fragment
  )> }
);

export type AdminFetchQuestionnairesQueryVariables = Exact<{
  organizationId: Scalars['String'];
  questionnaireIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  questionnaireType?: Maybe<QuestionnaireType>;
  latest?: Maybe<Scalars['Boolean']>;
}>;


export type AdminFetchQuestionnairesQuery = (
  { __typename?: 'Query' }
  & { adminFetchQuestionnaires: (
    { __typename?: 'PaginatedQuestionnaireResponse' }
    & Pick<PaginatedQuestionnaireResponse, 'currentPage' | 'hasNextPage' | 'totalPageCount' | 'totalResultCount'>
    & { results: Array<(
      { __typename?: 'QuestionnaireExam' }
      & FetchQuestionnaires_QuestionnaireExam_Fragment
    ) | (
      { __typename?: 'QuestionnaireQuiz' }
      & FetchQuestionnaires_QuestionnaireQuiz_Fragment
    ) | (
      { __typename?: 'QuestionnaireSurvey' }
      & FetchQuestionnaires_QuestionnaireSurvey_Fragment
    )> }
  ) }
);

export type AdminFetchQuestionnaireAnswersQueryVariables = Exact<{
  organizationId: Scalars['String'];
  userIds: Array<Scalars['String']> | Scalars['String'];
}>;


export type AdminFetchQuestionnaireAnswersQuery = (
  { __typename?: 'Query' }
  & { adminFetchQuestionnaireAnswers: (
    { __typename?: 'PaginatedUserQuestionnaireAnswerResponse' }
    & Pick<PaginatedUserQuestionnaireAnswerResponse, 'currentPage' | 'hasNextPage' | 'totalPageCount' | 'totalResultCount'>
    & { results: Array<(
      { __typename?: 'UserQuestionnaireAnswer' }
      & FetchQuestionnaireAnswersFragment
    )> }
  ) }
);

export type StudentFetchCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type StudentFetchCoursesQuery = (
  { __typename?: 'Query' }
  & { studentFetchCourses: (
    { __typename?: 'PaginatedCourseResponse' }
    & Pick<PaginatedCourseResponse, 'currentPage' | 'hasNextPage' | 'totalPageCount' | 'totalResultCount'>
    & { results: Array<(
      { __typename?: 'Course' }
      & FetchCoursesFragment
    )> }
  ) }
);

export type StudentFetchCourseQueryVariables = Exact<{
  courseId: Scalars['String'];
}>;


export type StudentFetchCourseQuery = (
  { __typename?: 'Query' }
  & { studentFetchCourse?: Maybe<(
    { __typename?: 'Course' }
    & FetchCourseFragment
  )> }
);

export type StudentFetchLessonQueryVariables = Exact<{
  lessonId: Scalars['String'];
}>;


export type StudentFetchLessonQuery = (
  { __typename?: 'Query' }
  & { studentFetchLesson?: Maybe<(
    { __typename?: 'Lesson' }
    & FetchLessonFragment
  )> }
);

export type AdminFetchCheckoutPurchaseSummaryQueryVariables = Exact<{
  checkoutId?: Maybe<Scalars['String']>;
  checkoutSharedId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
}>;


export type AdminFetchCheckoutPurchaseSummaryQuery = (
  { __typename?: 'Query' }
  & { adminFetchCheckoutPurchaseSummary: (
    { __typename?: 'FetchCheckoutPurchaseSummaryResponse' }
    & { total: (
      { __typename?: 'FetchCheckoutPurchaseSummaryObj' }
      & Pick<FetchCheckoutPurchaseSummaryObj, 'amount' | 'count' | 'statuses'>
    ), inflow: (
      { __typename?: 'FetchCheckoutPurchaseSummaryObj' }
      & Pick<FetchCheckoutPurchaseSummaryObj, 'amount' | 'count' | 'statuses'>
    ), waitingPayment: (
      { __typename?: 'FetchCheckoutPurchaseSummaryObj' }
      & Pick<FetchCheckoutPurchaseSummaryObj, 'amount' | 'count' | 'statuses'>
    ), outflow: (
      { __typename?: 'FetchCheckoutPurchaseSummaryObj' }
      & Pick<FetchCheckoutPurchaseSummaryObj, 'amount' | 'count' | 'statuses'>
    ) }
  ) }
);

export type AdminFetchCheckoutsQueryVariables = Exact<{
  filterArgs?: Maybe<CheckoutWhereInput>;
  paginationArgs?: Maybe<PagePaginationInput>;
  orderBy?: Maybe<Array<CheckoutOrderByInput> | CheckoutOrderByInput>;
  checkoutIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  splitConfigIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  organizationId: Scalars['String'];
  filterInputText?: Maybe<Scalars['String']>;
}>;


export type AdminFetchCheckoutsQuery = (
  { __typename?: 'Query' }
  & { adminFetchCheckouts: (
    { __typename?: 'PaginatedCheckoutResponse' }
    & Pick<PaginatedCheckoutResponse, 'currentPage' | 'totalPageCount' | 'totalResultCount' | 'hasNextPage'>
    & { results: Array<(
      { __typename?: 'Checkout' }
      & Pick<Checkout, '_id' | 'sharedCreatedAt' | 'updatedAt' | 'expirationDate' | 'description' | 'status' | 'currency' | 'invoiceItemsAmount' | 'invoiceTotalAmount' | 'invoiceDiscountedAmount' | 'sharedId' | 'latest' | 'organizationId' | 'splitConfigId' | 'updatedById' | 'createdById' | 'url'>
      & { splitConfig: (
        { __typename?: 'SplitConfig' }
        & { rules: Array<(
          { __typename?: 'SplitRule' }
          & { recipient?: Maybe<(
            { __typename?: 'Recipient' }
            & Pick<Recipient, '_id' | 'name'>
            & { taxIds?: Maybe<Array<(
              { __typename?: 'TaxId' }
              & Pick<TaxId, 'country' | 'type' | 'value'>
            )>> }
          )> }
        )> }
      ), paymentMethodsConfig: (
        { __typename?: 'CheckoutPaymentMethodsConfig' }
        & { creditCard?: Maybe<(
          { __typename?: 'CheckoutCreditCardConfig' }
          & Pick<CheckoutCreditCardConfig, 'enabled'>
          & { installmentsRule?: Maybe<(
            { __typename?: 'InvoicePaymentLinkCreditCardSpecificInstallmentsInstallmentsRule' }
            & Pick<InvoicePaymentLinkCreditCardSpecificInstallmentsInstallmentsRule, 'installments' | 'type'>
          ) | (
            { __typename?: 'InvoicePaymentLinkCreditCardUpToInstallmentsRule' }
            & Pick<InvoicePaymentLinkCreditCardUpToInstallmentsRule, 'upTo' | 'type'>
          )> }
        )>, pix?: Maybe<(
          { __typename?: 'CheckoutPixConfig' }
          & Pick<CheckoutPixConfig, 'enabled'>
          & { expirationRule?: Maybe<(
            { __typename?: 'InvoicePaymentLinkDaysAfterCreationExpirationRule' }
            & Pick<InvoicePaymentLinkDaysAfterCreationExpirationRule, 'days' | 'type'>
          ) | (
            { __typename?: 'InvoicePaymentLinkMinutesAfterCreationExpirationRule' }
            & Pick<InvoicePaymentLinkMinutesAfterCreationExpirationRule, 'minutes' | 'type'>
          ) | (
            { __typename?: 'InvoicePaymentLinkSpecificDateExpirationRule' }
            & Pick<InvoicePaymentLinkSpecificDateExpirationRule, 'date' | 'type'>
          )> }
        )>, bankSlip?: Maybe<(
          { __typename?: 'CheckoutBankSlipConfig' }
          & Pick<CheckoutBankSlipConfig, 'enabled'>
          & { expirationRule?: Maybe<(
            { __typename?: 'InvoicePaymentLinkDaysAfterCreationExpirationRule' }
            & Pick<InvoicePaymentLinkDaysAfterCreationExpirationRule, 'days' | 'type'>
          ) | (
            { __typename?: 'InvoicePaymentLinkMinutesAfterCreationExpirationRule' }
            & Pick<InvoicePaymentLinkMinutesAfterCreationExpirationRule, 'type'>
          ) | (
            { __typename?: 'InvoicePaymentLinkSpecificDateExpirationRule' }
            & Pick<InvoicePaymentLinkSpecificDateExpirationRule, 'date' | 'type'>
          )> }
        )> }
      ) }
    )> }
  ) }
);

export type AdminFetchCheckoutQueryVariables = Exact<{
  checkoutId?: Maybe<Scalars['String']>;
  checkoutSharedId?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
}>;


export type AdminFetchCheckoutQuery = (
  { __typename?: 'Query' }
  & { adminFetchCheckout?: Maybe<(
    { __typename?: 'Checkout' }
    & Pick<Checkout, '_id' | 'createdAt' | 'updatedAt' | 'expirationDate' | 'description' | 'status' | 'currency' | 'invoiceItemsAmount' | 'invoiceTotalAmount' | 'invoiceDiscountedAmount' | 'sharedId' | 'latest' | 'organizationId' | 'splitConfigId' | 'updatedById' | 'createdById' | 'url'>
    & { splitConfig: (
      { __typename?: 'SplitConfig' }
      & { rules: Array<(
        { __typename?: 'SplitRule' }
        & { recipient?: Maybe<(
          { __typename?: 'Recipient' }
          & Pick<Recipient, '_id' | 'name'>
          & { taxIds?: Maybe<Array<(
            { __typename?: 'TaxId' }
            & Pick<TaxId, 'country' | 'type' | 'value'>
          )>> }
        )> }
      )> }
    ), paymentMethodsConfig: (
      { __typename?: 'CheckoutPaymentMethodsConfig' }
      & { creditCard?: Maybe<(
        { __typename?: 'CheckoutCreditCardConfig' }
        & Pick<CheckoutCreditCardConfig, 'enabled'>
        & { installmentsRule?: Maybe<(
          { __typename?: 'InvoicePaymentLinkCreditCardSpecificInstallmentsInstallmentsRule' }
          & Pick<InvoicePaymentLinkCreditCardSpecificInstallmentsInstallmentsRule, 'installments' | 'type'>
        ) | (
          { __typename?: 'InvoicePaymentLinkCreditCardUpToInstallmentsRule' }
          & Pick<InvoicePaymentLinkCreditCardUpToInstallmentsRule, 'upTo' | 'type'>
        )> }
      )>, pix?: Maybe<(
        { __typename?: 'CheckoutPixConfig' }
        & Pick<CheckoutPixConfig, 'enabled'>
        & { expirationRule?: Maybe<(
          { __typename?: 'InvoicePaymentLinkDaysAfterCreationExpirationRule' }
          & Pick<InvoicePaymentLinkDaysAfterCreationExpirationRule, 'days' | 'type'>
        ) | (
          { __typename?: 'InvoicePaymentLinkMinutesAfterCreationExpirationRule' }
          & Pick<InvoicePaymentLinkMinutesAfterCreationExpirationRule, 'minutes' | 'type'>
        ) | (
          { __typename?: 'InvoicePaymentLinkSpecificDateExpirationRule' }
          & Pick<InvoicePaymentLinkSpecificDateExpirationRule, 'date' | 'type'>
        )> }
      )>, bankSlip?: Maybe<(
        { __typename?: 'CheckoutBankSlipConfig' }
        & Pick<CheckoutBankSlipConfig, 'enabled'>
        & { expirationRule?: Maybe<(
          { __typename?: 'InvoicePaymentLinkDaysAfterCreationExpirationRule' }
          & Pick<InvoicePaymentLinkDaysAfterCreationExpirationRule, 'days' | 'type'>
        ) | (
          { __typename?: 'InvoicePaymentLinkMinutesAfterCreationExpirationRule' }
          & Pick<InvoicePaymentLinkMinutesAfterCreationExpirationRule, 'type'>
        ) | (
          { __typename?: 'InvoicePaymentLinkSpecificDateExpirationRule' }
          & Pick<InvoicePaymentLinkSpecificDateExpirationRule, 'date' | 'type'>
        )> }
      )> }
    ), invoiceDiscounts?: Maybe<Array<(
      { __typename?: 'InvoiceManualDiscount' }
      & Pick<InvoiceManualDiscount, '_id' | 'description' | 'amount'>
    ) | { __typename?: 'InvoiceVoucherDiscount' }>>, invoiceItems: Array<(
      { __typename?: 'InlineInvoiceItem' }
      & Pick<InlineInvoiceItem, 'quantity' | 'name' | 'amount' | 'type'>
    ) | (
      { __typename?: 'ProductInvoiceItem' }
      & Pick<ProductInvoiceItem, 'quantity' | 'productPrice' | 'type'>
      & { attachedInvoiceAccesses?: Maybe<Array<(
        { __typename?: 'InvoiceAccess' }
        & Pick<InvoiceAccess, '_id'>
      )>>, product: (
        { __typename?: 'AccessProduct' }
        & FetchProductFragment_AccessProduct_Fragment
      ) | (
        { __typename?: 'OtherProduct' }
        & FetchProductFragment_OtherProduct_Fragment
      ) }
    )> }
  )> }
);

export type AdminFetchCheckoutLogsQueryVariables = Exact<{
  checkoutId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminFetchCheckoutLogsQuery = (
  { __typename?: 'Query' }
  & { adminFetchLogs: (
    { __typename?: 'PaginatedLogResponse' }
    & { results: Array<(
      { __typename?: 'AddInvoiceDiscountLog' }
      & Pick<AddInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AddProductPriceLog' }
      & Pick<AddProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'ArchiveProductPriceLog' }
      & Pick<ArchiveProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AttachPaymentScheduleToInvoiceLog' }
      & Pick<AttachPaymentScheduleToInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AttachPaymentToInvoiceLog' }
      & Pick<AttachPaymentToInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CancelAnticipationLog' }
      & Pick<CancelAnticipationLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CancelWithdrawalLog' }
      & Pick<CancelWithdrawalLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CopyCertificateTemplateLog' }
      & Pick<CopyCertificateTemplateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateAnticipationLog' }
      & Pick<CreateAnticipationLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateBankAccountLog' }
      & Pick<CreateBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCardLog' }
      & Pick<CreateCardLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCertificateLog' }
      & Pick<CreateCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCertificateTemplateFromCopyLog' }
      & Pick<CreateCertificateTemplateFromCopyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCheckoutLog' }
      & Pick<CreateCheckoutLog, '_id' | 'type' | 'createdAt'>
      & { after: (
        { __typename?: 'CheckoutLogState' }
        & { checkout: (
          { __typename?: 'Checkout' }
          & Pick<Checkout, '_id' | 'status'>
        ) }
      ), targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateImportLog' }
      & Pick<CreateImportLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoiceAccessLog' }
      & Pick<CreateInvoiceAccessLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoiceLog' }
      & Pick<CreateInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoicePaymentLinkLog' }
      & Pick<CreateInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateMemberLog' }
      & Pick<CreateMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePaymentLog' }
      & Pick<CreatePaymentLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePaymentScheduleLog' }
      & Pick<CreatePaymentScheduleLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePlanConfigLog' }
      & Pick<CreatePlanConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePolicyLog' }
      & Pick<CreatePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateProductLog' }
      & Pick<CreateProductLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePurchaseLog' }
      & Pick<CreatePurchaseLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateRecipientLog' }
      & Pick<CreateRecipientLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateRefundLog' }
      & Pick<CreateRefundLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateSplitConfigLog' }
      & Pick<CreateSplitConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateUserPaymentProfileLog' }
      & Pick<CreateUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateWithdrawalLog' }
      & Pick<CreateWithdrawalLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteBankAccountLog' }
      & Pick<DeleteBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteCardLog' }
      & Pick<DeleteCardLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteCertificateLog' }
      & Pick<DeleteCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteInvoiceDiscountLog' }
      & Pick<DeleteInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteInvoicePaymentLinkLog' }
      & Pick<DeleteInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteMemberLog' }
      & Pick<DeleteMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeletePolicyLog' }
      & Pick<DeletePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteProductLog' }
      & Pick<DeleteProductLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteProductPriceLog' }
      & Pick<DeleteProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteSplitConfigLog' }
      & Pick<DeleteSplitConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteUserPaymentProfileLog' }
      & Pick<DeleteUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DetachPaymentFromInvoiceLog' }
      & Pick<DetachPaymentFromInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DetachPaymentScheduleFromInvoiceLog' }
      & Pick<DetachPaymentScheduleFromInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UnarchiveProductPriceLog' }
      & Pick<UnarchiveProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateAnticipationStatusLog' }
      & Pick<UpdateAnticipationStatusLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateBankAccountLog' }
      & Pick<UpdateBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateCertificateLog' }
      & Pick<UpdateCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateCheckoutLog' }
      & Pick<UpdateCheckoutLog, '_id' | 'type' | 'createdAt'>
      & { before: (
        { __typename?: 'CheckoutLogState' }
        & { checkout: (
          { __typename?: 'Checkout' }
          & Pick<Checkout, '_id' | 'status'>
        ) }
      ), after: (
        { __typename?: 'CheckoutLogState' }
        & { checkout: (
          { __typename?: 'Checkout' }
          & Pick<Checkout, '_id' | 'status'>
        ) }
      ), targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateImportLog' }
      & Pick<UpdateImportLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceAccessLog' }
      & Pick<UpdateInvoiceAccessLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceDiscountLog' }
      & Pick<UpdateInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceLog' }
      & Pick<UpdateInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoicePaymentLinkLog' }
      & Pick<UpdateInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateMemberLog' }
      & Pick<UpdateMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePaymentLog' }
      & Pick<UpdatePaymentLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePaymentScheduleLog' }
      & Pick<UpdatePaymentScheduleLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePlanConfigLog' }
      & Pick<UpdatePlanConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePolicyLog' }
      & Pick<UpdatePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateProductLog' }
      & Pick<UpdateProductLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateProductPriceLog' }
      & Pick<UpdateProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePurchaseLog' }
      & Pick<UpdatePurchaseLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateRecipientLog' }
      & Pick<UpdateRecipientLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateRefundLog' }
      & Pick<UpdateRefundLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateUserPaymentProfileLog' }
      & Pick<UpdateUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateWithdrawalStatusLog' }
      & Pick<UpdateWithdrawalStatusLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    )> }
  ) }
);

export type AdminFetchPurchasesQueryVariables = Exact<{
  filterArgs?: Maybe<PurchaseWhereInput>;
  paginationArgs?: Maybe<PagePaginationInput>;
  orderBy?: Maybe<Array<PurchaseOrderByInput> | PurchaseOrderByInput>;
  filterInputText?: Maybe<Scalars['String']>;
  purchaseIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  checkoutSharedIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  organizationId: Scalars['String'];
}>;


export type AdminFetchPurchasesQuery = (
  { __typename?: 'Query' }
  & { adminFetchPurchases: (
    { __typename?: 'PaginatedPurchaseResponse' }
    & Pick<PaginatedPurchaseResponse, 'currentPage' | 'totalPageCount' | 'totalResultCount' | 'hasNextPage'>
    & { results: Array<(
      { __typename?: 'Purchase' }
      & Pick<Purchase, '_id' | 'createdAt' | 'updatedAt' | 'status' | 'invoiceTotalAmount'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, 'paymentMethod' | 'amount' | 'scheduleTotalInstallments'>
        & { invoice?: Maybe<(
          { __typename?: 'Invoice' }
          & Pick<Invoice, 'expirationDate'>
        )>, user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, '_id' | 'email' | 'name' | 'phoneNumber' | 'phoneNumberCountry'>
        )>, userPaymentProfile?: Maybe<(
          { __typename?: 'UserPaymentProfile' }
          & { user: (
            { __typename?: 'StudentUser' }
            & Pick<StudentUser, '_id' | 'email' | 'name' | 'phoneNumber' | 'phoneNumberCountry'>
          ), taxIds?: Maybe<Array<(
            { __typename?: 'TaxId' }
            & Pick<TaxId, 'type' | 'value'>
          )>> }
        )> }
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, 'paymentMethod' | 'amount' | 'scheduleTotalInstallments'>
        & { invoice?: Maybe<(
          { __typename?: 'Invoice' }
          & Pick<Invoice, 'expirationDate'>
        )>, user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, '_id' | 'email' | 'name' | 'phoneNumber' | 'phoneNumberCountry'>
        )>, userPaymentProfile?: Maybe<(
          { __typename?: 'UserPaymentProfile' }
          & { user: (
            { __typename?: 'StudentUser' }
            & Pick<StudentUser, '_id' | 'email' | 'name' | 'phoneNumber' | 'phoneNumberCountry'>
          ), taxIds?: Maybe<Array<(
            { __typename?: 'TaxId' }
            & Pick<TaxId, 'type' | 'value'>
          )>> }
        )> }
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, 'paymentMethod' | 'amount' | 'scheduleTotalInstallments'>
        & { invoice?: Maybe<(
          { __typename?: 'Invoice' }
          & Pick<Invoice, 'expirationDate'>
        )>, user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, '_id' | 'email' | 'name' | 'phoneNumber' | 'phoneNumberCountry'>
        )>, userPaymentProfile?: Maybe<(
          { __typename?: 'UserPaymentProfile' }
          & { user: (
            { __typename?: 'StudentUser' }
            & Pick<StudentUser, '_id' | 'email' | 'name' | 'phoneNumber' | 'phoneNumberCountry'>
          ), taxIds?: Maybe<Array<(
            { __typename?: 'TaxId' }
            & Pick<TaxId, 'type' | 'value'>
          )>> }
        )> }
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, 'paymentMethod' | 'amount' | 'scheduleTotalInstallments'>
        & { invoice?: Maybe<(
          { __typename?: 'Invoice' }
          & Pick<Invoice, 'expirationDate'>
        )>, user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, '_id' | 'email' | 'name' | 'phoneNumber' | 'phoneNumberCountry'>
        )>, userPaymentProfile?: Maybe<(
          { __typename?: 'UserPaymentProfile' }
          & { user: (
            { __typename?: 'StudentUser' }
            & Pick<StudentUser, '_id' | 'email' | 'name' | 'phoneNumber' | 'phoneNumberCountry'>
          ), taxIds?: Maybe<Array<(
            { __typename?: 'TaxId' }
            & Pick<TaxId, 'type' | 'value'>
          )>> }
        )> }
      ), user: (
        { __typename?: 'StudentUser' }
        & Pick<StudentUser, '_id' | 'email' | 'name' | 'phoneNumber' | 'phoneNumberCountry'>
      ) }
    )> }
  ) }
);

export type AdminFetchInvoiceQueryVariables = Exact<{
  organizationId: Scalars['String'];
  invoiceId: Scalars['String'];
}>;


export type AdminFetchInvoiceQuery = (
  { __typename?: 'Query' }
  & { adminFetchInvoice?: Maybe<(
    { __typename?: 'Invoice' }
    & FetchInvoiceFragmentFragment
  )> }
);

export type AdminFetchInvoicesQueryVariables = Exact<{
  organizationId: Scalars['String'];
  invoiceIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  filterArgs?: Maybe<InvoiceWhereInput>;
  paginationArgs?: Maybe<PagePaginationInput>;
  orderBy?: Maybe<Array<InvoiceOrderByInput> | InvoiceOrderByInput>;
}>;


export type AdminFetchInvoicesQuery = (
  { __typename?: 'Query' }
  & { adminFetchInvoices: (
    { __typename?: 'PaginatedInvoiceResponse' }
    & Pick<PaginatedInvoiceResponse, 'currentPage' | 'totalPageCount' | 'totalResultCount' | 'hasNextPage'>
    & { results: Array<(
      { __typename?: 'Invoice' }
      & Pick<Invoice, '_id' | 'description' | 'createdAt' | 'status' | 'expirationDate' | 'totalAmount' | 'paidAmount' | 'checkoutId' | 'checkoutSharedId' | 'createdById'>
      & { user: (
        { __typename?: 'StudentUser' }
        & Pick<StudentUser, '_id' | 'name' | 'email'>
      ), accesses: Array<(
        { __typename?: 'InvoiceAccess' }
        & Pick<InvoiceAccess, 'isInvitationUsed'>
      )> }
    )> }
  ) }
);

export type AdminFetchInvoiceLogsQueryVariables = Exact<{
  invoiceId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminFetchInvoiceLogsQuery = (
  { __typename?: 'Query' }
  & { adminFetchLogs: (
    { __typename?: 'PaginatedLogResponse' }
    & { results: Array<(
      { __typename?: 'AddInvoiceDiscountLog' }
      & Pick<AddInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AddProductPriceLog' }
      & Pick<AddProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'ArchiveProductPriceLog' }
      & Pick<ArchiveProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AttachPaymentScheduleToInvoiceLog' }
      & Pick<AttachPaymentScheduleToInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AttachPaymentToInvoiceLog' }
      & Pick<AttachPaymentToInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CancelAnticipationLog' }
      & Pick<CancelAnticipationLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CancelWithdrawalLog' }
      & Pick<CancelWithdrawalLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CopyCertificateTemplateLog' }
      & Pick<CopyCertificateTemplateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateAnticipationLog' }
      & Pick<CreateAnticipationLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateBankAccountLog' }
      & Pick<CreateBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCardLog' }
      & Pick<CreateCardLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCertificateLog' }
      & Pick<CreateCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCertificateTemplateFromCopyLog' }
      & Pick<CreateCertificateTemplateFromCopyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCheckoutLog' }
      & Pick<CreateCheckoutLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateImportLog' }
      & Pick<CreateImportLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoiceAccessLog' }
      & Pick<CreateInvoiceAccessLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoiceLog' }
      & Pick<CreateInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { after: (
        { __typename?: 'InvoiceLogState' }
        & { invoice: (
          { __typename?: 'Invoice' }
          & Pick<Invoice, '_id' | 'status'>
          & { user: (
            { __typename?: 'StudentUser' }
            & Pick<StudentUser, 'name'>
          ) }
        ) }
      ), targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoicePaymentLinkLog' }
      & Pick<CreateInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateMemberLog' }
      & Pick<CreateMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePaymentLog' }
      & Pick<CreatePaymentLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePaymentScheduleLog' }
      & Pick<CreatePaymentScheduleLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePlanConfigLog' }
      & Pick<CreatePlanConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePolicyLog' }
      & Pick<CreatePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateProductLog' }
      & Pick<CreateProductLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePurchaseLog' }
      & Pick<CreatePurchaseLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateRecipientLog' }
      & Pick<CreateRecipientLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateRefundLog' }
      & Pick<CreateRefundLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateSplitConfigLog' }
      & Pick<CreateSplitConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateUserPaymentProfileLog' }
      & Pick<CreateUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateWithdrawalLog' }
      & Pick<CreateWithdrawalLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteBankAccountLog' }
      & Pick<DeleteBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteCardLog' }
      & Pick<DeleteCardLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteCertificateLog' }
      & Pick<DeleteCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteInvoiceDiscountLog' }
      & Pick<DeleteInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteInvoicePaymentLinkLog' }
      & Pick<DeleteInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteMemberLog' }
      & Pick<DeleteMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeletePolicyLog' }
      & Pick<DeletePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteProductLog' }
      & Pick<DeleteProductLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteProductPriceLog' }
      & Pick<DeleteProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteSplitConfigLog' }
      & Pick<DeleteSplitConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteUserPaymentProfileLog' }
      & Pick<DeleteUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DetachPaymentFromInvoiceLog' }
      & Pick<DetachPaymentFromInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DetachPaymentScheduleFromInvoiceLog' }
      & Pick<DetachPaymentScheduleFromInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UnarchiveProductPriceLog' }
      & Pick<UnarchiveProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateAnticipationStatusLog' }
      & Pick<UpdateAnticipationStatusLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateBankAccountLog' }
      & Pick<UpdateBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateCertificateLog' }
      & Pick<UpdateCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateCheckoutLog' }
      & Pick<UpdateCheckoutLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateImportLog' }
      & Pick<UpdateImportLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceAccessLog' }
      & Pick<UpdateInvoiceAccessLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceDiscountLog' }
      & Pick<UpdateInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceLog' }
      & Pick<UpdateInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { before: (
        { __typename?: 'InvoiceLogState' }
        & { invoice: (
          { __typename?: 'Invoice' }
          & Pick<Invoice, '_id' | 'status'>
          & { user: (
            { __typename?: 'StudentUser' }
            & Pick<StudentUser, 'name'>
          ) }
        ) }
      ), after: (
        { __typename?: 'InvoiceLogState' }
        & { invoice: (
          { __typename?: 'Invoice' }
          & Pick<Invoice, '_id' | 'status'>
          & { user: (
            { __typename?: 'StudentUser' }
            & Pick<StudentUser, 'name'>
          ) }
        ) }
      ), targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoicePaymentLinkLog' }
      & Pick<UpdateInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateMemberLog' }
      & Pick<UpdateMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePaymentLog' }
      & Pick<UpdatePaymentLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePaymentScheduleLog' }
      & Pick<UpdatePaymentScheduleLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePlanConfigLog' }
      & Pick<UpdatePlanConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePolicyLog' }
      & Pick<UpdatePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateProductLog' }
      & Pick<UpdateProductLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateProductPriceLog' }
      & Pick<UpdateProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePurchaseLog' }
      & Pick<UpdatePurchaseLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateRecipientLog' }
      & Pick<UpdateRecipientLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateRefundLog' }
      & Pick<UpdateRefundLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateUserPaymentProfileLog' }
      & Pick<UpdateUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateWithdrawalStatusLog' }
      & Pick<UpdateWithdrawalStatusLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    )> }
  ) }
);

export type AdminFetchInvoicePaymentLinksQueryVariables = Exact<{
  organizationId: Scalars['String'];
  invoiceIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  invoicePaymentLinkIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  filterArgs?: Maybe<InvoicePaymentLinkWhereInput>;
  paginationArgs?: Maybe<PagePaginationInput>;
  orderBy?: Maybe<Array<InvoicePaymentLinkOrderByInput> | InvoicePaymentLinkOrderByInput>;
}>;


export type AdminFetchInvoicePaymentLinksQuery = (
  { __typename?: 'Query' }
  & { adminFetchInvoicePaymentLinks: (
    { __typename?: 'PaginatedInvoicePaymentLinkResponse' }
    & Pick<PaginatedInvoicePaymentLinkResponse, 'currentPage' | 'totalPageCount' | 'totalResultCount' | 'hasNextPage'>
    & { results: Array<(
      { __typename?: 'InvoicePaymentLink' }
      & Pick<InvoicePaymentLink, '_id' | 'createdAt' | 'status' | 'amount' | 'expirationDate' | 'url' | 'name'>
      & { creditCard: (
        { __typename?: 'InvoicePaymentLinkCreditCard' }
        & Pick<InvoicePaymentLinkCreditCard, 'enabled'>
        & { installmentsRule?: Maybe<(
          { __typename?: 'InvoicePaymentLinkCreditCardSpecificInstallmentsInstallmentsRule' }
          & Pick<InvoicePaymentLinkCreditCardSpecificInstallmentsInstallmentsRule, 'installments' | 'type'>
        ) | (
          { __typename?: 'InvoicePaymentLinkCreditCardUpToInstallmentsRule' }
          & Pick<InvoicePaymentLinkCreditCardUpToInstallmentsRule, 'upTo' | 'type'>
        )> }
      ), pix: (
        { __typename?: 'InvoicePaymentLinkPix' }
        & Pick<InvoicePaymentLinkPix, 'enabled'>
        & { expirationRule?: Maybe<(
          { __typename?: 'InvoicePaymentLinkDaysAfterCreationExpirationRule' }
          & Pick<InvoicePaymentLinkDaysAfterCreationExpirationRule, 'days' | 'type'>
        ) | (
          { __typename?: 'InvoicePaymentLinkMinutesAfterCreationExpirationRule' }
          & Pick<InvoicePaymentLinkMinutesAfterCreationExpirationRule, 'type'>
        ) | (
          { __typename?: 'InvoicePaymentLinkSpecificDateExpirationRule' }
          & Pick<InvoicePaymentLinkSpecificDateExpirationRule, 'date' | 'type'>
        )> }
      ), bankSlip: (
        { __typename?: 'InvoicePaymentLinkBankSlip' }
        & Pick<InvoicePaymentLinkBankSlip, 'enabled'>
        & { expirationRule?: Maybe<(
          { __typename?: 'InvoicePaymentLinkDaysAfterCreationExpirationRule' }
          & Pick<InvoicePaymentLinkDaysAfterCreationExpirationRule, 'days' | 'type'>
        ) | (
          { __typename?: 'InvoicePaymentLinkMinutesAfterCreationExpirationRule' }
          & Pick<InvoicePaymentLinkMinutesAfterCreationExpirationRule, 'type'>
        ) | (
          { __typename?: 'InvoicePaymentLinkSpecificDateExpirationRule' }
          & Pick<InvoicePaymentLinkSpecificDateExpirationRule, 'date' | 'type'>
        )> }
      ) }
    )> }
  ) }
);

export type AdminFetchInvoiceAccessesQueryVariables = Exact<{
  organizationId: Scalars['String'];
  invoiceIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  productIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  studentUserIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  invoiceAccessIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  paginationArgs?: Maybe<PagePaginationInput>;
  filterArgs?: Maybe<InvoiceAccessWhereInput>;
  orderBy?: Maybe<Array<InvoiceAccessOrderByInput> | InvoiceAccessOrderByInput>;
}>;


export type AdminFetchInvoiceAccessesQuery = (
  { __typename?: 'Query' }
  & { adminFetchInvoiceAccesses: (
    { __typename?: 'PaginatedInvoiceAccessResponse' }
    & Pick<PaginatedInvoiceAccessResponse, 'currentPage' | 'totalPageCount' | 'totalResultCount' | 'hasNextPage'>
    & { results: Array<(
      { __typename?: 'InvoiceAccess' }
      & Pick<InvoiceAccess, '_id' | 'status' | 'liberationRule' | 'origin' | 'invitationUrl'>
      & { user?: Maybe<(
        { __typename?: 'StudentUser' }
        & Pick<StudentUser, '_id' | 'name' | 'email'>
      )>, product: (
        { __typename?: 'AccessProduct' }
        & FetchProductFragment_AccessProduct_Fragment
      ) | (
        { __typename?: 'OtherProduct' }
        & FetchProductFragment_OtherProduct_Fragment
      ) }
    )> }
  ) }
);

export type AdminFetchInvoiceAccessesSummaryQueryVariables = Exact<{
  organizationId: Scalars['String'];
  invoiceIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  paginationArgs?: Maybe<PagePaginationInput>;
  filterArgs?: Maybe<InvoiceAccessWhereInput>;
  orderBy?: Maybe<Array<InvoiceAccessOrderByInput> | InvoiceAccessOrderByInput>;
}>;


export type AdminFetchInvoiceAccessesSummaryQuery = (
  { __typename?: 'Query' }
  & { adminFetchInvoiceAccessesSummary: (
    { __typename?: 'PaginatedInvoiceAccessSummaryResponse' }
    & Pick<PaginatedInvoiceAccessSummaryResponse, 'currentPage' | 'totalPageCount' | 'totalResultCount' | 'hasNextPage'>
    & { results: Array<(
      { __typename?: 'InvoiceAccessSummary' }
      & Pick<InvoiceAccessSummary, 'count'>
      & { invoiceAccess: (
        { __typename?: 'InvoiceAccess' }
        & Pick<InvoiceAccess, '_id'>
        & { product: (
          { __typename?: 'AccessProduct' }
          & FetchProductFragment_AccessProduct_Fragment
        ) | (
          { __typename?: 'OtherProduct' }
          & FetchProductFragment_OtherProduct_Fragment
        ) }
      ) }
    )> }
  ) }
);

export type InvoiceDetailTabsCountQueryVariables = Exact<{
  organizationId: Scalars['String'];
  invoiceIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  filterSchedules?: Maybe<PaymentScheduleWhereInput>;
  filterOpenings?: Maybe<InvoiceAccessWhereInput>;
}>;


export type InvoiceDetailTabsCountQuery = (
  { __typename?: 'Query' }
  & { adminFetchPayments: (
    { __typename?: 'PaginatedPaymentResponse' }
    & Pick<PaginatedPaymentResponse, 'totalResultCount'>
  ), adminFetchPaymentSchedules: (
    { __typename?: 'PaginatedPaymentScheduleResponse' }
    & Pick<PaginatedPaymentScheduleResponse, 'totalResultCount'>
  ), adminFetchInvoicePaymentLinks: (
    { __typename?: 'PaginatedInvoicePaymentLinkResponse' }
    & Pick<PaginatedInvoicePaymentLinkResponse, 'totalResultCount'>
  ), adminFetchInvoiceAccesses: (
    { __typename?: 'PaginatedInvoiceAccessResponse' }
    & Pick<PaginatedInvoiceAccessResponse, 'totalResultCount'>
  ) }
);

export type AdminFetchUsersByPaymentProfilesQueryVariables = Exact<{
  organizationId: Scalars['String'];
  filterInputText: Scalars['String'];
}>;


export type AdminFetchUsersByPaymentProfilesQuery = (
  { __typename?: 'Query' }
  & { adminFetchUsersByPaymentProfiles: (
    { __typename?: 'PaginatedStudentUserResponse' }
    & { results: Array<(
      { __typename?: 'StudentUser' }
      & Pick<StudentUser, '_id' | 'name' | 'email'>
    )> }
  ) }
);

export type AdminFetchUserPaymentProfilesQueryVariables = Exact<{
  organizationId: Scalars['String'];
  studentUserIds: Array<Scalars['String']> | Scalars['String'];
  latest: Scalars['Boolean'];
}>;


export type AdminFetchUserPaymentProfilesQuery = (
  { __typename?: 'Query' }
  & { adminFetchUserPaymentProfiles: (
    { __typename?: 'PaginatedUserPaymentProfileResponse' }
    & { results: Array<(
      { __typename?: 'UserPaymentProfile' }
      & FetchPaymentProfileFragmentFragment
    )> }
  ) }
);

export type AdminFetchPaymentsQueryVariables = Exact<{
  organizationId: Scalars['String'];
  userPaymentProfileIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  userPaymentProfileSharedIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  invoiceIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  invoicePaymentLinkIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  paymentScheduleSharedIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  paginationArgs?: Maybe<PagePaginationInput>;
  orderBy?: Maybe<Array<PaymentOrderByInput> | PaymentOrderByInput>;
  filterArgs?: Maybe<PaymentWhereInput>;
  filterInputText?: Maybe<Scalars['String']>;
}>;


export type AdminFetchPaymentsQuery = (
  { __typename?: 'Query' }
  & { adminFetchPayments: (
    { __typename?: 'PaginatedPaymentResponse' }
    & Pick<PaginatedPaymentResponse, 'currentPage' | 'totalPageCount' | 'totalResultCount' | 'hasNextPage'>
    & { results: Array<(
      { __typename?: 'BankSlipPayment' }
      & FetchPaymentFragment_BankSlipPayment_Fragment
    ) | (
      { __typename?: 'CreditCardPayment' }
      & FetchPaymentFragment_CreditCardPayment_Fragment
    ) | (
      { __typename?: 'MoneyPayment' }
      & FetchPaymentFragment_MoneyPayment_Fragment
    ) | (
      { __typename?: 'PixPayment' }
      & FetchPaymentFragment_PixPayment_Fragment
    )> }
  ) }
);

export type AdminFetchPaymentSchedulesQueryVariables = Exact<{
  filterArgs?: Maybe<PaymentScheduleWhereInput>;
  userIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  invoiceIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  splitConfigIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  paymentScheduleIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  userPaymentProfileIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  userPaymentProfileSharedIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  paymentScheduleSharedIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  paginationArgs?: Maybe<PagePaginationInput>;
  orderBy?: Maybe<Array<PaymentScheduleOrderByInput> | PaymentScheduleOrderByInput>;
  filterInputText?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
}>;


export type AdminFetchPaymentSchedulesQuery = (
  { __typename?: 'Query' }
  & { adminFetchPaymentSchedules: (
    { __typename?: 'PaginatedPaymentScheduleResponse' }
    & Pick<PaginatedPaymentScheduleResponse, 'currentPage' | 'totalPageCount' | 'totalResultCount' | 'hasNextPage'>
    & { results: Array<(
      { __typename?: 'PaymentSchedule' }
      & FetchPaymentScheduleFragmentFragment
    )> }
  ) }
);

export type AdminFetchPaymentSchedulesSummaryQueryVariables = Exact<{
  organizationId: Scalars['String'];
  paymentScheduleSharedIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type AdminFetchPaymentSchedulesSummaryQuery = (
  { __typename?: 'Query' }
  & { adminFetchPaymentSchedules: (
    { __typename?: 'PaginatedPaymentScheduleResponse' }
    & { results: Array<(
      { __typename?: 'PaymentSchedule' }
      & Pick<PaymentSchedule, '_id' | 'status' | 'paymentDate' | 'paymentMethod' | 'expirationDate' | 'installment' | 'amount'>
      & { card?: Maybe<(
        { __typename?: 'Card' }
        & Pick<Card, 'lastDigits'>
      )> }
    )> }
  ) }
);

export type AdminFetchPaymentQueryVariables = Exact<{
  paymentId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminFetchPaymentQuery = (
  { __typename?: 'Query' }
  & { adminFetchPayment?: Maybe<(
    { __typename?: 'BankSlipPayment' }
    & FetchPaymentFragment_BankSlipPayment_Fragment
  ) | (
    { __typename?: 'CreditCardPayment' }
    & FetchPaymentFragment_CreditCardPayment_Fragment
  ) | (
    { __typename?: 'MoneyPayment' }
    & FetchPaymentFragment_MoneyPayment_Fragment
  ) | (
    { __typename?: 'PixPayment' }
    & FetchPaymentFragment_PixPayment_Fragment
  )> }
);

export type AdminFetchPaymentScheduleQueryVariables = Exact<{
  paymentScheduleId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminFetchPaymentScheduleQuery = (
  { __typename?: 'Query' }
  & { adminFetchPaymentSchedule?: Maybe<(
    { __typename?: 'PaymentSchedule' }
    & FetchPaymentScheduleFragmentFragment
  )> }
);

export type AdminFetchGeneratingPaymentScheduleCountQueryVariables = Exact<{
  organizationId: Scalars['String'];
  invoiceId?: Maybe<Scalars['String']>;
  paymentScheduleSharedId?: Maybe<Scalars['String']>;
}>;


export type AdminFetchGeneratingPaymentScheduleCountQuery = (
  { __typename?: 'Query' }
  & { adminFetchGeneratingPaymentScheduleCount: (
    { __typename?: 'FetchProcessingPaymentScheduleGenCountResponse' }
    & Pick<FetchProcessingPaymentScheduleGenCountResponse, 'count'>
  ) }
);

export type AdminFetchPaymentHistoryQueryVariables = Exact<{
  paymentId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminFetchPaymentHistoryQuery = (
  { __typename?: 'Query' }
  & { adminFetchPaymentHistory?: Maybe<Array<(
    { __typename?: 'PaymentHistoryOperation' }
    & Pick<PaymentHistoryOperation, 'status' | 'type' | 'createdAt' | 'amount'>
  )>> }
);

export type AdminFetchPaymentPayablesQueryVariables = Exact<{
  paymentId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminFetchPaymentPayablesQuery = (
  { __typename?: 'Query' }
  & { adminFetchPaymentPayables?: Maybe<Array<(
    { __typename?: 'Payable' }
    & Pick<Payable, 'id' | 'status' | 'amount' | 'feeAmount' | 'anticipationFeeAmount' | 'paymentDate' | 'installment'>
    & { recipient?: Maybe<(
      { __typename?: 'Recipient' }
      & Pick<Recipient, 'name'>
    )> }
  )>> }
);

export type AdminFetchPaymentLogsQueryVariables = Exact<{
  paymentId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminFetchPaymentLogsQuery = (
  { __typename?: 'Query' }
  & { adminFetchLogs: (
    { __typename?: 'PaginatedLogResponse' }
    & { results: Array<(
      { __typename?: 'AddInvoiceDiscountLog' }
      & Pick<AddInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AddProductPriceLog' }
      & Pick<AddProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'ArchiveProductPriceLog' }
      & Pick<ArchiveProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AttachPaymentScheduleToInvoiceLog' }
      & Pick<AttachPaymentScheduleToInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AttachPaymentToInvoiceLog' }
      & Pick<AttachPaymentToInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CancelAnticipationLog' }
      & Pick<CancelAnticipationLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CancelWithdrawalLog' }
      & Pick<CancelWithdrawalLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CopyCertificateTemplateLog' }
      & Pick<CopyCertificateTemplateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateAnticipationLog' }
      & Pick<CreateAnticipationLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateBankAccountLog' }
      & Pick<CreateBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCardLog' }
      & Pick<CreateCardLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCertificateLog' }
      & Pick<CreateCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCertificateTemplateFromCopyLog' }
      & Pick<CreateCertificateTemplateFromCopyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCheckoutLog' }
      & Pick<CreateCheckoutLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateImportLog' }
      & Pick<CreateImportLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoiceAccessLog' }
      & Pick<CreateInvoiceAccessLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoiceLog' }
      & Pick<CreateInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoicePaymentLinkLog' }
      & Pick<CreateInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateMemberLog' }
      & Pick<CreateMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePaymentLog' }
      & Pick<CreatePaymentLog, '_id' | 'type' | 'createdAt'>
      & { after: (
        { __typename?: 'PaymentLogState' }
        & { payment: (
          { __typename?: 'BankSlipPayment' }
          & Pick<BankSlipPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'CreditCardPayment' }
          & Pick<CreditCardPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'MoneyPayment' }
          & Pick<MoneyPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'PixPayment' }
          & Pick<PixPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) }
      ), targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePaymentScheduleLog' }
      & Pick<CreatePaymentScheduleLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePlanConfigLog' }
      & Pick<CreatePlanConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePolicyLog' }
      & Pick<CreatePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateProductLog' }
      & Pick<CreateProductLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePurchaseLog' }
      & Pick<CreatePurchaseLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateRecipientLog' }
      & Pick<CreateRecipientLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateRefundLog' }
      & Pick<CreateRefundLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateSplitConfigLog' }
      & Pick<CreateSplitConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateUserPaymentProfileLog' }
      & Pick<CreateUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateWithdrawalLog' }
      & Pick<CreateWithdrawalLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteBankAccountLog' }
      & Pick<DeleteBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteCardLog' }
      & Pick<DeleteCardLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteCertificateLog' }
      & Pick<DeleteCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteInvoiceDiscountLog' }
      & Pick<DeleteInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteInvoicePaymentLinkLog' }
      & Pick<DeleteInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteMemberLog' }
      & Pick<DeleteMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeletePolicyLog' }
      & Pick<DeletePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteProductLog' }
      & Pick<DeleteProductLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteProductPriceLog' }
      & Pick<DeleteProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteSplitConfigLog' }
      & Pick<DeleteSplitConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteUserPaymentProfileLog' }
      & Pick<DeleteUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DetachPaymentFromInvoiceLog' }
      & Pick<DetachPaymentFromInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DetachPaymentScheduleFromInvoiceLog' }
      & Pick<DetachPaymentScheduleFromInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UnarchiveProductPriceLog' }
      & Pick<UnarchiveProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateAnticipationStatusLog' }
      & Pick<UpdateAnticipationStatusLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateBankAccountLog' }
      & Pick<UpdateBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateCertificateLog' }
      & Pick<UpdateCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateCheckoutLog' }
      & Pick<UpdateCheckoutLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateImportLog' }
      & Pick<UpdateImportLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceAccessLog' }
      & Pick<UpdateInvoiceAccessLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceDiscountLog' }
      & Pick<UpdateInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceLog' }
      & Pick<UpdateInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoicePaymentLinkLog' }
      & Pick<UpdateInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateMemberLog' }
      & Pick<UpdateMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePaymentLog' }
      & Pick<UpdatePaymentLog, '_id' | 'type' | 'createdAt'>
      & { before: (
        { __typename?: 'PaymentLogState' }
        & { payment: (
          { __typename?: 'BankSlipPayment' }
          & Pick<BankSlipPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'CreditCardPayment' }
          & Pick<CreditCardPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'MoneyPayment' }
          & Pick<MoneyPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'PixPayment' }
          & Pick<PixPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) }
      ), after: (
        { __typename?: 'PaymentLogState' }
        & { payment: (
          { __typename?: 'BankSlipPayment' }
          & Pick<BankSlipPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'CreditCardPayment' }
          & Pick<CreditCardPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'MoneyPayment' }
          & Pick<MoneyPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'PixPayment' }
          & Pick<PixPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) }
      ), targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePaymentScheduleLog' }
      & Pick<UpdatePaymentScheduleLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePlanConfigLog' }
      & Pick<UpdatePlanConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePolicyLog' }
      & Pick<UpdatePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateProductLog' }
      & Pick<UpdateProductLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateProductPriceLog' }
      & Pick<UpdateProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePurchaseLog' }
      & Pick<UpdatePurchaseLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateRecipientLog' }
      & Pick<UpdateRecipientLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateRefundLog' }
      & Pick<UpdateRefundLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateUserPaymentProfileLog' }
      & Pick<UpdateUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateWithdrawalStatusLog' }
      & Pick<UpdateWithdrawalStatusLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    )> }
  ) }
);

export type AdminFetchPaymentScheduleLogsQueryVariables = Exact<{
  paymentId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminFetchPaymentScheduleLogsQuery = (
  { __typename?: 'Query' }
  & { adminFetchLogs: (
    { __typename?: 'PaginatedLogResponse' }
    & { results: Array<(
      { __typename?: 'AddInvoiceDiscountLog' }
      & Pick<AddInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AddProductPriceLog' }
      & Pick<AddProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'ArchiveProductPriceLog' }
      & Pick<ArchiveProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AttachPaymentScheduleToInvoiceLog' }
      & Pick<AttachPaymentScheduleToInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AttachPaymentToInvoiceLog' }
      & Pick<AttachPaymentToInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CancelAnticipationLog' }
      & Pick<CancelAnticipationLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CancelWithdrawalLog' }
      & Pick<CancelWithdrawalLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CopyCertificateTemplateLog' }
      & Pick<CopyCertificateTemplateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateAnticipationLog' }
      & Pick<CreateAnticipationLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateBankAccountLog' }
      & Pick<CreateBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCardLog' }
      & Pick<CreateCardLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCertificateLog' }
      & Pick<CreateCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCertificateTemplateFromCopyLog' }
      & Pick<CreateCertificateTemplateFromCopyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCheckoutLog' }
      & Pick<CreateCheckoutLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateImportLog' }
      & Pick<CreateImportLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoiceAccessLog' }
      & Pick<CreateInvoiceAccessLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoiceLog' }
      & Pick<CreateInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoicePaymentLinkLog' }
      & Pick<CreateInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateMemberLog' }
      & Pick<CreateMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePaymentLog' }
      & Pick<CreatePaymentLog, '_id' | 'type' | 'createdAt'>
      & { after: (
        { __typename?: 'PaymentLogState' }
        & { payment: (
          { __typename?: 'BankSlipPayment' }
          & Pick<BankSlipPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'CreditCardPayment' }
          & Pick<CreditCardPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'MoneyPayment' }
          & Pick<MoneyPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'PixPayment' }
          & Pick<PixPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) }
      ), targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePaymentScheduleLog' }
      & Pick<CreatePaymentScheduleLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePlanConfigLog' }
      & Pick<CreatePlanConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePolicyLog' }
      & Pick<CreatePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateProductLog' }
      & Pick<CreateProductLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePurchaseLog' }
      & Pick<CreatePurchaseLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateRecipientLog' }
      & Pick<CreateRecipientLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateRefundLog' }
      & Pick<CreateRefundLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateSplitConfigLog' }
      & Pick<CreateSplitConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateUserPaymentProfileLog' }
      & Pick<CreateUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateWithdrawalLog' }
      & Pick<CreateWithdrawalLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteBankAccountLog' }
      & Pick<DeleteBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteCardLog' }
      & Pick<DeleteCardLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteCertificateLog' }
      & Pick<DeleteCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteInvoiceDiscountLog' }
      & Pick<DeleteInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteInvoicePaymentLinkLog' }
      & Pick<DeleteInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteMemberLog' }
      & Pick<DeleteMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeletePolicyLog' }
      & Pick<DeletePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteProductLog' }
      & Pick<DeleteProductLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteProductPriceLog' }
      & Pick<DeleteProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteSplitConfigLog' }
      & Pick<DeleteSplitConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteUserPaymentProfileLog' }
      & Pick<DeleteUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DetachPaymentFromInvoiceLog' }
      & Pick<DetachPaymentFromInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DetachPaymentScheduleFromInvoiceLog' }
      & Pick<DetachPaymentScheduleFromInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UnarchiveProductPriceLog' }
      & Pick<UnarchiveProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateAnticipationStatusLog' }
      & Pick<UpdateAnticipationStatusLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateBankAccountLog' }
      & Pick<UpdateBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateCertificateLog' }
      & Pick<UpdateCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateCheckoutLog' }
      & Pick<UpdateCheckoutLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateImportLog' }
      & Pick<UpdateImportLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceAccessLog' }
      & Pick<UpdateInvoiceAccessLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceDiscountLog' }
      & Pick<UpdateInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceLog' }
      & Pick<UpdateInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoicePaymentLinkLog' }
      & Pick<UpdateInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateMemberLog' }
      & Pick<UpdateMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePaymentLog' }
      & Pick<UpdatePaymentLog, '_id' | 'type' | 'createdAt'>
      & { before: (
        { __typename?: 'PaymentLogState' }
        & { payment: (
          { __typename?: 'BankSlipPayment' }
          & Pick<BankSlipPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'CreditCardPayment' }
          & Pick<CreditCardPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'MoneyPayment' }
          & Pick<MoneyPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'PixPayment' }
          & Pick<PixPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) }
      ), after: (
        { __typename?: 'PaymentLogState' }
        & { payment: (
          { __typename?: 'BankSlipPayment' }
          & Pick<BankSlipPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'CreditCardPayment' }
          & Pick<CreditCardPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'MoneyPayment' }
          & Pick<MoneyPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'PixPayment' }
          & Pick<PixPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) }
      ), targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePaymentScheduleLog' }
      & Pick<UpdatePaymentScheduleLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePlanConfigLog' }
      & Pick<UpdatePlanConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePolicyLog' }
      & Pick<UpdatePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateProductLog' }
      & Pick<UpdateProductLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateProductPriceLog' }
      & Pick<UpdateProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePurchaseLog' }
      & Pick<UpdatePurchaseLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateRecipientLog' }
      & Pick<UpdateRecipientLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateRefundLog' }
      & Pick<UpdateRefundLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateUserPaymentProfileLog' }
      & Pick<UpdateUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateWithdrawalStatusLog' }
      & Pick<UpdateWithdrawalStatusLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    )> }
  ) }
);

export type AdminFetchRefundsQueryVariables = Exact<{
  organizationId: Scalars['String'];
  paymentIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  refundIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type AdminFetchRefundsQuery = (
  { __typename?: 'Query' }
  & { adminFetchRefunds?: Maybe<(
    { __typename?: 'PaginatedRefundResponse' }
    & { results: Array<(
      { __typename?: 'Refund' }
      & Pick<Refund, '_id' | 'status' | 'amount'>
    )> }
  )> }
);

export type RecipientsQueryVariables = Exact<{
  pagination?: Maybe<PagePaginationInput>;
  where?: Maybe<RecipientWhereInput>;
  orderBy?: Maybe<Array<RecipientOrderByInput> | RecipientOrderByInput>;
  organizationId: Scalars['String'];
}>;


export type RecipientsQuery = (
  { __typename?: 'Query' }
  & { adminFetchRecipients: (
    { __typename?: 'PaginatedRecipientResponse' }
    & Pick<PaginatedRecipientResponse, 'currentPage' | 'totalResultCount'>
    & { results: Array<(
      { __typename?: 'Recipient' }
      & Pick<Recipient, '_id' | 'name' | 'type' | 'createdAt'>
      & { createdBy?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'name'>
      )>, taxIds?: Maybe<Array<(
        { __typename?: 'TaxId' }
        & Pick<TaxId, 'value'>
      )>> }
    )> }
  ) }
);

export type RecipientQueryVariables = Exact<{
  recipientId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type RecipientQuery = (
  { __typename?: 'Query' }
  & { adminFetchRecipient?: Maybe<(
    { __typename?: 'Recipient' }
    & Pick<Recipient, '_id' | 'name' | 'type'>
    & { taxIds?: Maybe<Array<(
      { __typename?: 'TaxId' }
      & Pick<TaxId, 'type' | 'value'>
    )>> }
  )> }
);

export type RecipientBankAccountsQueryVariables = Exact<{
  recipientIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  organizationId: Scalars['String'];
  pagination?: Maybe<PagePaginationInput>;
}>;


export type RecipientBankAccountsQuery = (
  { __typename?: 'Query' }
  & { adminFetchRecipientBankAccounts: (
    { __typename?: 'PaginatedBankAccountResponse' }
    & Pick<PaginatedBankAccountResponse, 'currentPage' | 'totalResultCount'>
    & { results: Array<(
      { __typename?: 'BankAccount' }
      & Pick<BankAccount, '_id' | 'accountType' | 'accountDigit' | 'accountNumber' | 'branchDigit' | 'branchNumber'>
      & { bank?: Maybe<(
        { __typename?: 'Bank' }
        & Pick<Bank, '_id' | 'name' | 'code'>
      )> }
    )> }
  ) }
);

export type AdminFetchSplitConfigsQueryVariables = Exact<{
  organizationId: Scalars['String'];
}>;


export type AdminFetchSplitConfigsQuery = (
  { __typename?: 'Query' }
  & { adminFetchSplitConfigs: (
    { __typename?: 'PaginatedSplitConfigResponse' }
    & { results: Array<(
      { __typename?: 'SplitConfig' }
      & Pick<SplitConfig, '_id'>
      & { rules: Array<(
        { __typename?: 'SplitRule' }
        & { recipient?: Maybe<(
          { __typename?: 'Recipient' }
          & Pick<Recipient, 'name'>
          & { taxIds?: Maybe<Array<(
            { __typename?: 'TaxId' }
            & Pick<TaxId, 'type' | 'value'>
          )>>, bankAccounts?: Maybe<Array<(
            { __typename?: 'BankAccount' }
            & Pick<BankAccount, '_id'>
          )>> }
        )> }
      )> }
    )> }
  ) }
);

export type RecipientBalanceOperationsQueryVariables = Exact<{
  pagination: PagePaginationInput;
  endDate?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  recipientId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type RecipientBalanceOperationsQuery = (
  { __typename?: 'Query' }
  & { adminFetchRecipientBalanceOperations: (
    { __typename?: 'FetchRecipientOperationsResponse' }
    & Pick<FetchRecipientOperationsResponse, 'currentPage' | 'hasNextPage'>
    & { results: Array<(
      { __typename?: 'BankSlipPaymentOperation' }
      & Pick<BankSlipPaymentOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'BankSlipRefundFeeOperation' }
      & Pick<BankSlipRefundFeeOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'BankSlipRefundOperation' }
      & Pick<BankSlipRefundOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'BankSlipRefundReversalOperation' }
      & Pick<BankSlipRefundReversalOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'CreditCardAnticipatedPayablePaymentOperation' }
      & Pick<CreditCardAnticipatedPayablePaymentOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), payable: (
        { __typename?: 'Payable' }
        & Pick<Payable, 'installment'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'CreditCardPayableChargebackOperation' }
      & Pick<CreditCardPayableChargebackOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), payable: (
        { __typename?: 'Payable' }
        & Pick<Payable, 'installment'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'CreditCardPayableChargebackRefundOperation' }
      & Pick<CreditCardPayableChargebackRefundOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), payable: (
        { __typename?: 'Payable' }
        & Pick<Payable, 'installment'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'CreditCardPayablePaymentOperation' }
      & Pick<CreditCardPayablePaymentOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), payable: (
        { __typename?: 'Payable' }
        & Pick<Payable, 'installment'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'CreditCardPayableRefundOperation' }
      & Pick<CreditCardPayableRefundOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), payable: (
        { __typename?: 'Payable' }
        & Pick<Payable, 'installment'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'PixPaymentOperation' }
      & Pick<PixPaymentOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'PixRefundOperation' }
      & Pick<PixRefundOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'TransferPaymentOperation' }
      & Pick<TransferPaymentOperation, 'type'>
      & { balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'TransferRefundOperation' }
      & Pick<TransferRefundOperation, 'type'>
      & { balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'UnknownOperation' }
      & Pick<UnknownOperation, 'type'>
      & { balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    )> }
  ) }
);

export type RecipientFutureOperationsQueryVariables = Exact<{
  pagination: PagePaginationInput;
  endDate?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  recipientId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type RecipientFutureOperationsQuery = (
  { __typename?: 'Query' }
  & { adminFetchRecipientFutureOperations: (
    { __typename?: 'FetchRecipientOperationsResponse' }
    & Pick<FetchRecipientOperationsResponse, 'currentPage' | 'hasNextPage'>
    & { results: Array<(
      { __typename?: 'BankSlipPaymentOperation' }
      & Pick<BankSlipPaymentOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'BankSlipRefundFeeOperation' }
      & Pick<BankSlipRefundFeeOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'BankSlipRefundOperation' }
      & Pick<BankSlipRefundOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'BankSlipRefundReversalOperation' }
      & Pick<BankSlipRefundReversalOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'CreditCardAnticipatedPayablePaymentOperation' }
      & Pick<CreditCardAnticipatedPayablePaymentOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), payable: (
        { __typename?: 'Payable' }
        & Pick<Payable, 'installment'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'CreditCardPayableChargebackOperation' }
      & Pick<CreditCardPayableChargebackOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), payable: (
        { __typename?: 'Payable' }
        & Pick<Payable, 'installment'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'CreditCardPayableChargebackRefundOperation' }
      & Pick<CreditCardPayableChargebackRefundOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), payable: (
        { __typename?: 'Payable' }
        & Pick<Payable, 'installment'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'CreditCardPayablePaymentOperation' }
      & Pick<CreditCardPayablePaymentOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), payable: (
        { __typename?: 'Payable' }
        & Pick<Payable, 'installment'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'CreditCardPayableRefundOperation' }
      & Pick<CreditCardPayableRefundOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), payable: (
        { __typename?: 'Payable' }
        & Pick<Payable, 'installment'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'PixPaymentOperation' }
      & Pick<PixPaymentOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'PixRefundOperation' }
      & Pick<PixRefundOperation, 'type'>
      & { payment: (
        { __typename?: 'BankSlipPayment' }
        & Pick<BankSlipPayment, '_id'>
      ) | (
        { __typename?: 'CreditCardPayment' }
        & Pick<CreditCardPayment, '_id'>
      ) | (
        { __typename?: 'MoneyPayment' }
        & Pick<MoneyPayment, '_id'>
      ) | (
        { __typename?: 'PixPayment' }
        & Pick<PixPayment, '_id'>
      ), balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'TransferPaymentOperation' }
      & Pick<TransferPaymentOperation, 'type'>
      & { balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'TransferRefundOperation' }
      & Pick<TransferRefundOperation, 'type'>
      & { balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    ) | (
      { __typename?: 'UnknownOperation' }
      & Pick<UnknownOperation, 'type'>
      & { balanceOperation: (
        { __typename?: 'BalanceOperation' }
        & Pick<BalanceOperation, 'id' | 'amount' | 'feeAmount' | 'createdAt'>
      ) }
    )> }
  ) }
);

export type BalanceQueryVariables = Exact<{
  recipientId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type BalanceQuery = (
  { __typename?: 'Query' }
  & { adminFetchRecipientBalance: (
    { __typename?: 'FetchRecipientBalanceResponse' }
    & Pick<FetchRecipientBalanceResponse, 'preparingWithdrawalsAmount' | 'gatewayWaitingFundsAmount' | 'expectedAvailableAmount' | 'gatewayAvailableAmount'>
  ) }
);

export type AdminFetchWithdrawalsQueryVariables = Exact<{
  organizationId: Scalars['String'];
  recipientIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  paginationArgs: PagePaginationInput;
}>;


export type AdminFetchWithdrawalsQuery = (
  { __typename?: 'Query' }
  & { adminFetchWithdrawals: (
    { __typename?: 'PaginatedWithdrawalResponse' }
    & Pick<PaginatedWithdrawalResponse, 'currentPage' | 'totalResultCount' | 'hasNextPage'>
    & { results: Array<(
      { __typename?: 'Withdrawal' }
      & Pick<Withdrawal, '_id' | 'createdAt' | 'amount' | 'withdrawalGatewayFeeAmount' | 'status'>
    )> }
  ) }
);

export type AdminFetchWithdrawalQueryVariables = Exact<{
  organizationId: Scalars['String'];
  withdrawalId: Scalars['String'];
}>;


export type AdminFetchWithdrawalQuery = (
  { __typename?: 'Query' }
  & { adminFetchWithdrawal?: Maybe<(
    { __typename?: 'Withdrawal' }
    & Pick<Withdrawal, '_id' | 'createdAt' | 'amount' | 'withdrawalGatewayFeeAmount' | 'status'>
    & { recipient?: Maybe<(
      { __typename?: 'Recipient' }
      & Pick<Recipient, 'name'>
      & { taxIds?: Maybe<Array<(
        { __typename?: 'TaxId' }
        & Pick<TaxId, 'type' | 'value'>
      )>> }
    )>, bankAccount?: Maybe<(
      { __typename?: 'BankAccount' }
      & Pick<BankAccount, 'accountType' | 'accountNumber' | 'accountDigit' | 'branchNumber' | 'branchDigit'>
      & { bank?: Maybe<(
        { __typename?: 'Bank' }
        & Pick<Bank, 'code' | 'name'>
      )> }
    )> }
  )> }
);

export type AdminFetchWithdrawalLogsQueryVariables = Exact<{
  withdrawalId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminFetchWithdrawalLogsQuery = (
  { __typename?: 'Query' }
  & { adminFetchLogs: (
    { __typename?: 'PaginatedLogResponse' }
    & { results: Array<(
      { __typename?: 'AddInvoiceDiscountLog' }
      & Pick<AddInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AddProductPriceLog' }
      & Pick<AddProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'ArchiveProductPriceLog' }
      & Pick<ArchiveProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AttachPaymentScheduleToInvoiceLog' }
      & Pick<AttachPaymentScheduleToInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AttachPaymentToInvoiceLog' }
      & Pick<AttachPaymentToInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CancelAnticipationLog' }
      & Pick<CancelAnticipationLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CancelWithdrawalLog' }
      & Pick<CancelWithdrawalLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CopyCertificateTemplateLog' }
      & Pick<CopyCertificateTemplateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateAnticipationLog' }
      & Pick<CreateAnticipationLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateBankAccountLog' }
      & Pick<CreateBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCardLog' }
      & Pick<CreateCardLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCertificateLog' }
      & Pick<CreateCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCertificateTemplateFromCopyLog' }
      & Pick<CreateCertificateTemplateFromCopyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCheckoutLog' }
      & Pick<CreateCheckoutLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateImportLog' }
      & Pick<CreateImportLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoiceAccessLog' }
      & Pick<CreateInvoiceAccessLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoiceLog' }
      & Pick<CreateInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoicePaymentLinkLog' }
      & Pick<CreateInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateMemberLog' }
      & Pick<CreateMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePaymentLog' }
      & Pick<CreatePaymentLog, '_id' | 'type' | 'createdAt'>
      & { after: (
        { __typename?: 'PaymentLogState' }
        & { payment: (
          { __typename?: 'BankSlipPayment' }
          & Pick<BankSlipPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'CreditCardPayment' }
          & Pick<CreditCardPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'MoneyPayment' }
          & Pick<MoneyPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'PixPayment' }
          & Pick<PixPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) }
      ), targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePaymentScheduleLog' }
      & Pick<CreatePaymentScheduleLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePlanConfigLog' }
      & Pick<CreatePlanConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePolicyLog' }
      & Pick<CreatePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateProductLog' }
      & Pick<CreateProductLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePurchaseLog' }
      & Pick<CreatePurchaseLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateRecipientLog' }
      & Pick<CreateRecipientLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateRefundLog' }
      & Pick<CreateRefundLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateSplitConfigLog' }
      & Pick<CreateSplitConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateUserPaymentProfileLog' }
      & Pick<CreateUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateWithdrawalLog' }
      & Pick<CreateWithdrawalLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteBankAccountLog' }
      & Pick<DeleteBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteCardLog' }
      & Pick<DeleteCardLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteCertificateLog' }
      & Pick<DeleteCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteInvoiceDiscountLog' }
      & Pick<DeleteInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteInvoicePaymentLinkLog' }
      & Pick<DeleteInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteMemberLog' }
      & Pick<DeleteMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeletePolicyLog' }
      & Pick<DeletePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteProductLog' }
      & Pick<DeleteProductLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteProductPriceLog' }
      & Pick<DeleteProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteSplitConfigLog' }
      & Pick<DeleteSplitConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteUserPaymentProfileLog' }
      & Pick<DeleteUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DetachPaymentFromInvoiceLog' }
      & Pick<DetachPaymentFromInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DetachPaymentScheduleFromInvoiceLog' }
      & Pick<DetachPaymentScheduleFromInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UnarchiveProductPriceLog' }
      & Pick<UnarchiveProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateAnticipationStatusLog' }
      & Pick<UpdateAnticipationStatusLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateBankAccountLog' }
      & Pick<UpdateBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateCertificateLog' }
      & Pick<UpdateCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateCheckoutLog' }
      & Pick<UpdateCheckoutLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateImportLog' }
      & Pick<UpdateImportLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceAccessLog' }
      & Pick<UpdateInvoiceAccessLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceDiscountLog' }
      & Pick<UpdateInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceLog' }
      & Pick<UpdateInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoicePaymentLinkLog' }
      & Pick<UpdateInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateMemberLog' }
      & Pick<UpdateMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePaymentLog' }
      & Pick<UpdatePaymentLog, '_id' | 'type' | 'createdAt'>
      & { before: (
        { __typename?: 'PaymentLogState' }
        & { payment: (
          { __typename?: 'BankSlipPayment' }
          & Pick<BankSlipPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'CreditCardPayment' }
          & Pick<CreditCardPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'MoneyPayment' }
          & Pick<MoneyPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'PixPayment' }
          & Pick<PixPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) }
      ), after: (
        { __typename?: 'PaymentLogState' }
        & { payment: (
          { __typename?: 'BankSlipPayment' }
          & Pick<BankSlipPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'CreditCardPayment' }
          & Pick<CreditCardPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'MoneyPayment' }
          & Pick<MoneyPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'PixPayment' }
          & Pick<PixPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) }
      ), targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePaymentScheduleLog' }
      & Pick<UpdatePaymentScheduleLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePlanConfigLog' }
      & Pick<UpdatePlanConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePolicyLog' }
      & Pick<UpdatePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateProductLog' }
      & Pick<UpdateProductLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateProductPriceLog' }
      & Pick<UpdateProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePurchaseLog' }
      & Pick<UpdatePurchaseLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateRecipientLog' }
      & Pick<UpdateRecipientLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateRefundLog' }
      & Pick<UpdateRefundLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateUserPaymentProfileLog' }
      & Pick<UpdateUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateWithdrawalStatusLog' }
      & Pick<UpdateWithdrawalStatusLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    )> }
  ) }
);

export type AdminFetchAnticipationsQueryVariables = Exact<{
  organizationId: Scalars['String'];
  recipientIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  paginationArgs: PagePaginationInput;
}>;


export type AdminFetchAnticipationsQuery = (
  { __typename?: 'Query' }
  & { adminFetchAnticipations: (
    { __typename?: 'PaginatedAnticipationResponse' }
    & Pick<PaginatedAnticipationResponse, 'currentPage' | 'totalResultCount' | 'hasNextPage'>
    & { results: Array<(
      { __typename?: 'Anticipation' }
      & Pick<Anticipation, '_id' | 'createdAt' | 'amount' | 'anticipationGatewayFeeAmount' | 'status'>
    )> }
  ) }
);

export type AdminFetchAnticipationQueryVariables = Exact<{
  organizationId: Scalars['String'];
  anticipationId: Scalars['String'];
}>;


export type AdminFetchAnticipationQuery = (
  { __typename?: 'Query' }
  & { adminFetchAnticipation?: Maybe<(
    { __typename?: 'Anticipation' }
    & Pick<Anticipation, '_id' | 'createdAt' | 'amount' | 'anticipationGatewayFeeAmount' | 'status'>
    & { recipient?: Maybe<(
      { __typename?: 'Recipient' }
      & Pick<Recipient, 'name'>
      & { taxIds?: Maybe<Array<(
        { __typename?: 'TaxId' }
        & Pick<TaxId, 'type' | 'value'>
      )>> }
    )> }
  )> }
);

export type AdminFetchRecipientAnticipationLimitsQueryVariables = Exact<{
  organizationId: Scalars['String'];
  recipientId: Scalars['String'];
  timeframe: AnticipationTimeframe;
}>;


export type AdminFetchRecipientAnticipationLimitsQuery = (
  { __typename?: 'Query' }
  & { adminFetchRecipientAnticipationLimits: (
    { __typename?: 'FetchRecipientAnticipationLimitsResponse' }
    & Pick<FetchRecipientAnticipationLimitsResponse, 'preparingAnticipationsAmount' | 'gatewayMaximumAmount' | 'gatewayMinimumAmount'>
  ) }
);

export type AdminFetchAnticipationLogsQueryVariables = Exact<{
  anticipationId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminFetchAnticipationLogsQuery = (
  { __typename?: 'Query' }
  & { adminFetchLogs: (
    { __typename?: 'PaginatedLogResponse' }
    & { results: Array<(
      { __typename?: 'AddInvoiceDiscountLog' }
      & Pick<AddInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AddProductPriceLog' }
      & Pick<AddProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'ArchiveProductPriceLog' }
      & Pick<ArchiveProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AttachPaymentScheduleToInvoiceLog' }
      & Pick<AttachPaymentScheduleToInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AttachPaymentToInvoiceLog' }
      & Pick<AttachPaymentToInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CancelAnticipationLog' }
      & Pick<CancelAnticipationLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CancelWithdrawalLog' }
      & Pick<CancelWithdrawalLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CopyCertificateTemplateLog' }
      & Pick<CopyCertificateTemplateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateAnticipationLog' }
      & Pick<CreateAnticipationLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateBankAccountLog' }
      & Pick<CreateBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCardLog' }
      & Pick<CreateCardLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCertificateLog' }
      & Pick<CreateCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCertificateTemplateFromCopyLog' }
      & Pick<CreateCertificateTemplateFromCopyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCheckoutLog' }
      & Pick<CreateCheckoutLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateImportLog' }
      & Pick<CreateImportLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoiceAccessLog' }
      & Pick<CreateInvoiceAccessLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoiceLog' }
      & Pick<CreateInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoicePaymentLinkLog' }
      & Pick<CreateInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateMemberLog' }
      & Pick<CreateMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePaymentLog' }
      & Pick<CreatePaymentLog, '_id' | 'type' | 'createdAt'>
      & { after: (
        { __typename?: 'PaymentLogState' }
        & { payment: (
          { __typename?: 'BankSlipPayment' }
          & Pick<BankSlipPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'CreditCardPayment' }
          & Pick<CreditCardPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'MoneyPayment' }
          & Pick<MoneyPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'PixPayment' }
          & Pick<PixPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) }
      ), targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePaymentScheduleLog' }
      & Pick<CreatePaymentScheduleLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePlanConfigLog' }
      & Pick<CreatePlanConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePolicyLog' }
      & Pick<CreatePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateProductLog' }
      & Pick<CreateProductLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePurchaseLog' }
      & Pick<CreatePurchaseLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateRecipientLog' }
      & Pick<CreateRecipientLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateRefundLog' }
      & Pick<CreateRefundLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateSplitConfigLog' }
      & Pick<CreateSplitConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateUserPaymentProfileLog' }
      & Pick<CreateUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateWithdrawalLog' }
      & Pick<CreateWithdrawalLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteBankAccountLog' }
      & Pick<DeleteBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteCardLog' }
      & Pick<DeleteCardLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteCertificateLog' }
      & Pick<DeleteCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteInvoiceDiscountLog' }
      & Pick<DeleteInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteInvoicePaymentLinkLog' }
      & Pick<DeleteInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteMemberLog' }
      & Pick<DeleteMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeletePolicyLog' }
      & Pick<DeletePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteProductLog' }
      & Pick<DeleteProductLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteProductPriceLog' }
      & Pick<DeleteProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteSplitConfigLog' }
      & Pick<DeleteSplitConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteUserPaymentProfileLog' }
      & Pick<DeleteUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DetachPaymentFromInvoiceLog' }
      & Pick<DetachPaymentFromInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DetachPaymentScheduleFromInvoiceLog' }
      & Pick<DetachPaymentScheduleFromInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UnarchiveProductPriceLog' }
      & Pick<UnarchiveProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateAnticipationStatusLog' }
      & Pick<UpdateAnticipationStatusLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateBankAccountLog' }
      & Pick<UpdateBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateCertificateLog' }
      & Pick<UpdateCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateCheckoutLog' }
      & Pick<UpdateCheckoutLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateImportLog' }
      & Pick<UpdateImportLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceAccessLog' }
      & Pick<UpdateInvoiceAccessLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceDiscountLog' }
      & Pick<UpdateInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceLog' }
      & Pick<UpdateInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoicePaymentLinkLog' }
      & Pick<UpdateInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateMemberLog' }
      & Pick<UpdateMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePaymentLog' }
      & Pick<UpdatePaymentLog, '_id' | 'type' | 'createdAt'>
      & { before: (
        { __typename?: 'PaymentLogState' }
        & { payment: (
          { __typename?: 'BankSlipPayment' }
          & Pick<BankSlipPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'CreditCardPayment' }
          & Pick<CreditCardPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'MoneyPayment' }
          & Pick<MoneyPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'PixPayment' }
          & Pick<PixPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) }
      ), after: (
        { __typename?: 'PaymentLogState' }
        & { payment: (
          { __typename?: 'BankSlipPayment' }
          & Pick<BankSlipPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'CreditCardPayment' }
          & Pick<CreditCardPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'MoneyPayment' }
          & Pick<MoneyPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) | (
          { __typename?: 'PixPayment' }
          & Pick<PixPayment, '_id' | 'status'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'name'>
          )> }
        ) }
      ), targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePaymentScheduleLog' }
      & Pick<UpdatePaymentScheduleLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePlanConfigLog' }
      & Pick<UpdatePlanConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePolicyLog' }
      & Pick<UpdatePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateProductLog' }
      & Pick<UpdateProductLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateProductPriceLog' }
      & Pick<UpdateProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePurchaseLog' }
      & Pick<UpdatePurchaseLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateRecipientLog' }
      & Pick<UpdateRecipientLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateRefundLog' }
      & Pick<UpdateRefundLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateUserPaymentProfileLog' }
      & Pick<UpdateUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateWithdrawalStatusLog' }
      & Pick<UpdateWithdrawalStatusLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    )> }
  ) }
);

export type AdminFetchUserCardsQueryVariables = Exact<{
  filterArgs?: Maybe<CardWhereInput>;
  paginationArgs?: Maybe<PagePaginationInput>;
  studentUserIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  cardIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  orderBy?: Maybe<Array<CardOrderByInput> | CardOrderByInput>;
  organizationId: Scalars['String'];
}>;


export type AdminFetchUserCardsQuery = (
  { __typename?: 'Query' }
  & { adminFetchUserCards: (
    { __typename?: 'PaginatedCardResponse' }
    & Pick<PaginatedCardResponse, 'currentPage' | 'totalResultCount' | 'hasNextPage'>
    & { results: Array<(
      { __typename?: 'Card' }
      & FetchUserCardsFragment
    )> }
  ) }
);

export type AdminFetchProductQueryVariables = Exact<{
  organizationId: Scalars['String'];
  productId: Scalars['String'];
}>;


export type AdminFetchProductQuery = (
  { __typename?: 'Query' }
  & { adminFetchProduct?: Maybe<(
    { __typename?: 'AccessProduct' }
    & FetchProductFragment_AccessProduct_Fragment
  ) | (
    { __typename?: 'OtherProduct' }
    & FetchProductFragment_OtherProduct_Fragment
  )> }
);

export type AdminFetchProductsQueryVariables = Exact<{
  organizationId: Scalars['String'];
  productIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  filterArgs?: Maybe<ProductWhereInput>;
  paginationArgs?: Maybe<PagePaginationInput>;
  orderBy?: Maybe<Array<ProductOrderByInput> | ProductOrderByInput>;
}>;


export type AdminFetchProductsQuery = (
  { __typename?: 'Query' }
  & { adminFetchProducts: (
    { __typename?: 'PaginatedProductResponse' }
    & Pick<PaginatedProductResponse, 'currentPage' | 'totalPageCount' | 'totalResultCount' | 'hasNextPage'>
    & { results: Array<(
      { __typename?: 'AccessProduct' }
      & FetchProductFragment_AccessProduct_Fragment
    ) | (
      { __typename?: 'OtherProduct' }
      & FetchProductFragment_OtherProduct_Fragment
    )> }
  ) }
);

export type AdminFetchProductLogsQueryVariables = Exact<{
  productId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type AdminFetchProductLogsQuery = (
  { __typename?: 'Query' }
  & { adminFetchLogs: (
    { __typename?: 'PaginatedLogResponse' }
    & { results: Array<(
      { __typename?: 'AddInvoiceDiscountLog' }
      & Pick<AddInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AddProductPriceLog' }
      & Pick<AddProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'ArchiveProductPriceLog' }
      & Pick<ArchiveProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AttachPaymentScheduleToInvoiceLog' }
      & Pick<AttachPaymentScheduleToInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'AttachPaymentToInvoiceLog' }
      & Pick<AttachPaymentToInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CancelAnticipationLog' }
      & Pick<CancelAnticipationLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CancelWithdrawalLog' }
      & Pick<CancelWithdrawalLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CopyCertificateTemplateLog' }
      & Pick<CopyCertificateTemplateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateAnticipationLog' }
      & Pick<CreateAnticipationLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateBankAccountLog' }
      & Pick<CreateBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCardLog' }
      & Pick<CreateCardLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCertificateLog' }
      & Pick<CreateCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCertificateTemplateFromCopyLog' }
      & Pick<CreateCertificateTemplateFromCopyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateCheckoutLog' }
      & Pick<CreateCheckoutLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateImportLog' }
      & Pick<CreateImportLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoiceAccessLog' }
      & Pick<CreateInvoiceAccessLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoiceLog' }
      & Pick<CreateInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateInvoicePaymentLinkLog' }
      & Pick<CreateInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateMemberLog' }
      & Pick<CreateMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePaymentLog' }
      & Pick<CreatePaymentLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePaymentScheduleLog' }
      & Pick<CreatePaymentScheduleLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePlanConfigLog' }
      & Pick<CreatePlanConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePolicyLog' }
      & Pick<CreatePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateProductLog' }
      & Pick<CreateProductLog, '_id' | 'type' | 'createdAt'>
      & { after: (
        { __typename?: 'ProductLogState' }
        & { product: (
          { __typename?: 'AccessProduct' }
          & Pick<AccessProduct, '_id' | 'name'>
        ) | (
          { __typename?: 'OtherProduct' }
          & Pick<OtherProduct, '_id' | 'name'>
        ) }
      ), targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreatePurchaseLog' }
      & Pick<CreatePurchaseLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateRecipientLog' }
      & Pick<CreateRecipientLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateRefundLog' }
      & Pick<CreateRefundLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateSplitConfigLog' }
      & Pick<CreateSplitConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateUserPaymentProfileLog' }
      & Pick<CreateUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'CreateWithdrawalLog' }
      & Pick<CreateWithdrawalLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteBankAccountLog' }
      & Pick<DeleteBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteCardLog' }
      & Pick<DeleteCardLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteCertificateLog' }
      & Pick<DeleteCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteInvoiceDiscountLog' }
      & Pick<DeleteInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteInvoicePaymentLinkLog' }
      & Pick<DeleteInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteMemberLog' }
      & Pick<DeleteMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeletePolicyLog' }
      & Pick<DeletePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteProductLog' }
      & Pick<DeleteProductLog, '_id' | 'type' | 'createdAt'>
      & { before: (
        { __typename?: 'ProductLogState' }
        & { product: (
          { __typename?: 'AccessProduct' }
          & Pick<AccessProduct, '_id' | 'name'>
        ) | (
          { __typename?: 'OtherProduct' }
          & Pick<OtherProduct, '_id' | 'name'>
        ) }
      ), targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteProductPriceLog' }
      & Pick<DeleteProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteSplitConfigLog' }
      & Pick<DeleteSplitConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DeleteUserPaymentProfileLog' }
      & Pick<DeleteUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DetachPaymentFromInvoiceLog' }
      & Pick<DetachPaymentFromInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'DetachPaymentScheduleFromInvoiceLog' }
      & Pick<DetachPaymentScheduleFromInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UnarchiveProductPriceLog' }
      & Pick<UnarchiveProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateAnticipationStatusLog' }
      & Pick<UpdateAnticipationStatusLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateBankAccountLog' }
      & Pick<UpdateBankAccountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateCertificateLog' }
      & Pick<UpdateCertificateLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateCheckoutLog' }
      & Pick<UpdateCheckoutLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateImportLog' }
      & Pick<UpdateImportLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceAccessLog' }
      & Pick<UpdateInvoiceAccessLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceDiscountLog' }
      & Pick<UpdateInvoiceDiscountLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoiceLog' }
      & Pick<UpdateInvoiceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateInvoicePaymentLinkLog' }
      & Pick<UpdateInvoicePaymentLinkLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateMemberLog' }
      & Pick<UpdateMemberLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePaymentLog' }
      & Pick<UpdatePaymentLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePaymentScheduleLog' }
      & Pick<UpdatePaymentScheduleLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePlanConfigLog' }
      & Pick<UpdatePlanConfigLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePolicyLog' }
      & Pick<UpdatePolicyLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateProductLog' }
      & Pick<UpdateProductLog, '_id' | 'type' | 'createdAt'>
      & { before: (
        { __typename?: 'ProductLogState' }
        & { product: (
          { __typename?: 'AccessProduct' }
          & Pick<AccessProduct, '_id' | 'name'>
        ) | (
          { __typename?: 'OtherProduct' }
          & Pick<OtherProduct, '_id' | 'name'>
        ) }
      ), after: (
        { __typename?: 'ProductLogState' }
        & { product: (
          { __typename?: 'AccessProduct' }
          & Pick<AccessProduct, '_id' | 'name'>
        ) | (
          { __typename?: 'OtherProduct' }
          & Pick<OtherProduct, '_id' | 'name'>
        ) }
      ), targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateProductPriceLog' }
      & Pick<UpdateProductPriceLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdatePurchaseLog' }
      & Pick<UpdatePurchaseLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateRecipientLog' }
      & Pick<UpdateRecipientLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateRefundLog' }
      & Pick<UpdateRefundLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateUserPaymentProfileLog' }
      & Pick<UpdateUserPaymentProfileLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    ) | (
      { __typename?: 'UpdateWithdrawalStatusLog' }
      & Pick<UpdateWithdrawalStatusLog, '_id' | 'type' | 'createdAt'>
      & { targets: Array<(
        { __typename?: 'LogTarget' }
        & Pick<LogTarget, 'type' | 'role' | 'reference'>
      )> }
    )> }
  ) }
);

export type AdminFetchReportsQueryVariables = Exact<{
  organizationId: Scalars['String'];
  orderBy?: Maybe<Array<ReportOrderByInput> | ReportOrderByInput>;
  pagination?: Maybe<PagePaginationInput>;
}>;


export type AdminFetchReportsQuery = (
  { __typename?: 'Query' }
  & { adminFetchReports: (
    { __typename?: 'PaginatedReportResponse' }
    & Pick<PaginatedReportResponse, 'currentPage' | 'hasNextPage' | 'totalPageCount' | 'totalResultCount'>
    & { results: Array<(
      { __typename?: 'QuestionnaireAnswersV1Report' }
      & FetchReports_QuestionnaireAnswersV1Report_Fragment
    ) | (
      { __typename?: 'UsersProgressV1Report' }
      & FetchReports_UsersProgressV1Report_Fragment
    )> }
  ) }
);

export type AdminFetchRoomsQueryVariables = Exact<{
  organizationId: Scalars['String'];
  courseIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  roomIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  orderBy?: Maybe<Array<RoomOrderByInput> | RoomOrderByInput>;
  filterArgs?: Maybe<RoomWhereInput>;
  paginationArgs?: Maybe<PagePaginationInput>;
}>;


export type AdminFetchRoomsQuery = (
  { __typename?: 'Query' }
  & { adminFetchRooms: (
    { __typename?: 'PaginatedRoomResponse' }
    & Pick<PaginatedRoomResponse, 'currentPage' | 'hasNextPage' | 'totalPageCount' | 'totalResultCount'>
    & { results: Array<(
      { __typename?: 'Room' }
      & FetchRoomFragment
    )> }
  ) }
);

export type AdminFetchDenormalizedEnrolmentsQueryVariables = Exact<{
  organizationId: Scalars['String'];
  courseIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  studentUserIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  orderBy?: Maybe<Array<DenormalizedEnrolmentOrderByInput> | DenormalizedEnrolmentOrderByInput>;
  where?: Maybe<DenormalizedEnrolmentWhereInput>;
  pagination?: Maybe<PagePaginationInput>;
}>;


export type AdminFetchDenormalizedEnrolmentsQuery = (
  { __typename?: 'Query' }
  & { adminFetchDenormalizedEnrolments: (
    { __typename?: 'PaginatedDenormalizedEnrolmentResponse' }
    & Pick<PaginatedDenormalizedEnrolmentResponse, 'currentPage' | 'hasNextPage' | 'totalPageCount' | 'totalResultCount'>
    & { results: Array<(
      { __typename?: 'DenormalizedEnrolment' }
      & FetchDenormalizedEnrolmentFragment
    )> }
  ) }
);

export type AdminFetchStudentsQueryVariables = Exact<{
  organizationId: Scalars['String'];
  studentUserIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  orderBy?: Maybe<Array<StudentUserOrderByInput> | StudentUserOrderByInput>;
  filter?: Maybe<StudentUserWhereInput>;
  pagination?: Maybe<PagePaginationInput>;
}>;


export type AdminFetchStudentsQuery = (
  { __typename?: 'Query' }
  & { adminFetchStudents: (
    { __typename?: 'PaginatedStudentUserResponse' }
    & Pick<PaginatedStudentUserResponse, 'currentPage' | 'hasNextPage' | 'totalPageCount' | 'totalResultCount'>
    & { results: Array<(
      { __typename?: 'StudentUser' }
      & FetchStudentFragment
    )> }
  ) }
);

export type AdminFetchStudentQueryVariables = Exact<{
  organizationId: Scalars['String'];
  studentUserId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
}>;


export type AdminFetchStudentQuery = (
  { __typename?: 'Query' }
  & { adminFetchStudent?: Maybe<(
    { __typename?: 'StudentUser' }
    & FetchStudentFragment
  )> }
);

export type StudentFetchDenormalizedEnrolmentsQueryVariables = Exact<{
  courseIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  orderBy?: Maybe<Array<DenormalizedEnrolmentOrderByInput> | DenormalizedEnrolmentOrderByInput>;
}>;


export type StudentFetchDenormalizedEnrolmentsQuery = (
  { __typename?: 'Query' }
  & { studentFetchDenormalizedEnrolments: (
    { __typename?: 'PaginatedDenormalizedEnrolmentResponse' }
    & { results: Array<(
      { __typename?: 'DenormalizedEnrolment' }
      & FetchDenormalizedEnrolmentFragment
    )> }
  ) }
);

export type StudentFetchEnrolmentsQueryVariables = Exact<{
  courseIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  orderBy?: Maybe<Array<EnrolmentOrderByInput> | EnrolmentOrderByInput>;
  paginationArgs: PagePaginationInput;
}>;


export type StudentFetchEnrolmentsQuery = (
  { __typename?: 'Query' }
  & { studentFetchEnrolments: (
    { __typename?: 'PaginatedEnrolmentResponse' }
    & Pick<PaginatedEnrolmentResponse, 'currentPage' | 'hasNextPage' | 'totalPageCount' | 'totalResultCount'>
    & { results: Array<(
      { __typename?: 'Enrolment' }
      & FetchEnrolmentFragment
    )> }
  ) }
);

export type StudentFetchProgressesQueryVariables = Exact<{
  courseIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  lessonIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type StudentFetchProgressesQuery = (
  { __typename?: 'Query' }
  & { studentFetchProgresses: (
    { __typename?: 'PaginatedUserProgressResponse' }
    & Pick<PaginatedUserProgressResponse, 'currentPage' | 'hasNextPage' | 'totalPageCount' | 'totalResultCount'>
    & { results: Array<(
      { __typename?: 'UserProgress' }
      & FetchUserProgressFragment
    )> }
  ) }
);

export type StudentFetchCourseProgressDataQueryVariables = Exact<{
  courseId: Scalars['String'];
}>;


export type StudentFetchCourseProgressDataQuery = (
  { __typename?: 'Query' }
  & { studentFetchCourseProgressData: (
    { __typename?: 'UserProgressDataResponse' }
    & FetchUserProgressDataResponseFragment
  ) }
);

export type StudentFetchCourseStateQueryVariables = Exact<{
  courseId: Scalars['String'];
}>;


export type StudentFetchCourseStateQuery = (
  { __typename?: 'Query' }
  & { studentFetchCourseState?: Maybe<(
    { __typename?: 'UserCourseState' }
    & FetchUserStateFragment
  )> }
);

export type StudentFetchQuestionnaireAnswerQueryVariables = Exact<{
  questionnaireId?: Maybe<Scalars['String']>;
  questionnaireSharedId?: Maybe<Scalars['String']>;
  courseId: Scalars['String'];
  lessonId: Scalars['String'];
}>;


export type StudentFetchQuestionnaireAnswerQuery = (
  { __typename?: 'Query' }
  & { studentFetchQuestionnaireAnswer?: Maybe<(
    { __typename?: 'UserQuestionnaireAnswer' }
    & FetchUserQuestionnaireAnswerWithQuestionnaireFragment
  )> }
);

export type StudentFetchQuestionnaireAnswersQueryVariables = Exact<{
  courseIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  lessonIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  orderBy?: Maybe<Array<UserQuestionnaireAnswerOrderByInput> | UserQuestionnaireAnswerOrderByInput>;
  questionnaireIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  userQuestionnaireAnswerIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type StudentFetchQuestionnaireAnswersQuery = (
  { __typename?: 'Query' }
  & { studentFetchQuestionnaireAnswers: (
    { __typename?: 'PaginatedUserQuestionnaireAnswerResponse' }
    & Pick<PaginatedUserQuestionnaireAnswerResponse, 'currentPage' | 'hasNextPage' | 'totalPageCount' | 'totalResultCount'>
    & { results: Array<(
      { __typename?: 'UserQuestionnaireAnswer' }
      & FetchUserQuestionnaireAnswerFragment
    )> }
  ) }
);
