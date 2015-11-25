
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 11/25/2015 22:14:34
-- Generated from EDMX file: J:\Root\DOT.NET\Linguistique-Valida\Linguistique.Valida.Data\LVData.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [LVData];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------


-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Projects'
CREATE TABLE [dbo].[Projects] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [IDCode] nvarchar(max)  NOT NULL,
    [FromDate] datetime  NOT NULL,
    [ToDate] datetime  NOT NULL,
    [Manager_Id] int  NOT NULL,
    [Release_Id] int  NOT NULL
);
GO

-- Creating table 'Requirements'
CREATE TABLE [dbo].[Requirements] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [ClientSettings] nvarchar(max)  NOT NULL,
    [CommonServer] bit  NOT NULL,
    [CommonServerReason] nvarchar(max)  NOT NULL,
    [ServerSettings] nvarchar(max)  NOT NULL,
    [MiscSettings] nvarchar(max)  NOT NULL,
    [ScenarioWorking] bit  NOT NULL,
    [SlidesCount] int  NOT NULL,
    [ExecutionTimeQA] float  NOT NULL,
    [ExecutionTimeEngg] float  NOT NULL,
    [ProjectId] int  NOT NULL,
    [BrandId] int  NOT NULL,
    [ApplicationId] int  NOT NULL,
    [UserId] int  NOT NULL,
    [UserId1] int  NOT NULL,
    [MediaId] int  NOT NULL,
    [FileId] int  NOT NULL
);
GO

-- Creating table 'Defects'
CREATE TABLE [dbo].[Defects] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Abstract] nvarchar(max)  NOT NULL,
    [SlideNo] int  NOT NULL,
    [TaskNo] int  NOT NULL,
    [SourceText] nvarchar(max)  NOT NULL,
    [TargetText] nvarchar(max)  NOT NULL,
    [Description] nvarchar(max)  NOT NULL,
    [ContextRequired] bit  NOT NULL,
    [SuggestionText] nvarchar(max)  NOT NULL,
    [LinguistCorrection] nvarchar(max)  NOT NULL,
    [CommentQA] nvarchar(max)  NOT NULL,
    [ProjectId] int  NOT NULL,
    [BrandId] int  NOT NULL,
    [LanguageId] int  NOT NULL,
    [UserId] int  NOT NULL,
    [UserId1] int  NOT NULL,
    [ApplicationId] int  NOT NULL,
    [SeverityId] int  NOT NULL,
    [CategoryId] int  NOT NULL,
    [StatusId] int  NOT NULL
);
GO

-- Creating table 'Users'
CREATE TABLE [dbo].[Users] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [IDCode] nvarchar(max)  NOT NULL,
    [Email] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Brands'
CREATE TABLE [dbo].[Brands] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [IDCode] nvarchar(max)  NOT NULL,
    [Name] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Releases'
CREATE TABLE [dbo].[Releases] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [IDCode] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Media'
CREATE TABLE [dbo].[Media] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Roles'
CREATE TABLE [dbo].[Roles] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [IDCode] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Applications'
CREATE TABLE [dbo].[Applications] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [IDCode] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Licenses'
CREATE TABLE [dbo].[Licenses] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [IDCode] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Areas'
CREATE TABLE [dbo].[Areas] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [IDCode] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Files'
CREATE TABLE [dbo].[Files] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Path] nvarchar(max)  NOT NULL,
    [Description] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Languages'
CREATE TABLE [dbo].[Languages] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Severities'
CREATE TABLE [dbo].[Severities] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Categories'
CREATE TABLE [dbo].[Categories] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Status'
CREATE TABLE [dbo].[Status] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'ProjectBrand'
CREATE TABLE [dbo].[ProjectBrand] (
    [Projects_Id] int  NOT NULL,
    [Brands_Id] int  NOT NULL
);
GO

-- Creating table 'ProjectLanguage'
CREATE TABLE [dbo].[ProjectLanguage] (
    [Projects_Id] int  NOT NULL,
    [Languages_Id] int  NOT NULL
);
GO

-- Creating table 'ProjectSteamers'
CREATE TABLE [dbo].[ProjectSteamers] (
    [ProjectsSteamers_Id] int  NOT NULL,
    [Steamers_Id] int  NOT NULL
);
GO

-- Creating table 'ProjectITers'
CREATE TABLE [dbo].[ProjectITers] (
    [ProjectsITers_Id] int  NOT NULL,
    [ITers_Id] int  NOT NULL
);
GO

-- Creating table 'ProjectPartners'
CREATE TABLE [dbo].[ProjectPartners] (
    [ProjectsPartners_Id] int  NOT NULL,
    [Partners_Id] int  NOT NULL
);
GO

-- Creating table 'ProjectParticipants'
CREATE TABLE [dbo].[ProjectParticipants] (
    [ProjectsParticipants_Id] int  NOT NULL,
    [Participants_Id] int  NOT NULL
);
GO

-- Creating table 'RequirementClientSettingsFiles'
CREATE TABLE [dbo].[RequirementClientSettingsFiles] (
    [RequirementsClientSettings_Id] int  NOT NULL,
    [ClientSettingsFiles_Id] int  NOT NULL
);
GO

-- Creating table 'RequirementServerSettingsFiles'
CREATE TABLE [dbo].[RequirementServerSettingsFiles] (
    [RequirementsServerSettings_Id] int  NOT NULL,
    [ServerSettingsFiles_Id] int  NOT NULL
);
GO

-- Creating table 'RequirementLicense'
CREATE TABLE [dbo].[RequirementLicense] (
    [Requirements_Id] int  NOT NULL,
    [Licenses_Id] int  NOT NULL
);
GO

-- Creating table 'RequirementRole'
CREATE TABLE [dbo].[RequirementRole] (
    [Requirements_Id] int  NOT NULL,
    [Roles_Id] int  NOT NULL
);
GO

-- Creating table 'RequirementArea'
CREATE TABLE [dbo].[RequirementArea] (
    [Requirements_Id] int  NOT NULL,
    [Areas_Id] int  NOT NULL
);
GO

-- Creating table 'DefectFileDescriptionFiles'
CREATE TABLE [dbo].[DefectFileDescriptionFiles] (
    [DefectsDescriptionFiles_Id] int  NOT NULL,
    [DescriptionFiles_Id] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Projects'
ALTER TABLE [dbo].[Projects]
ADD CONSTRAINT [PK_Projects]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Requirements'
ALTER TABLE [dbo].[Requirements]
ADD CONSTRAINT [PK_Requirements]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Defects'
ALTER TABLE [dbo].[Defects]
ADD CONSTRAINT [PK_Defects]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [PK_Users]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Brands'
ALTER TABLE [dbo].[Brands]
ADD CONSTRAINT [PK_Brands]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Releases'
ALTER TABLE [dbo].[Releases]
ADD CONSTRAINT [PK_Releases]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Media'
ALTER TABLE [dbo].[Media]
ADD CONSTRAINT [PK_Media]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Roles'
ALTER TABLE [dbo].[Roles]
ADD CONSTRAINT [PK_Roles]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Applications'
ALTER TABLE [dbo].[Applications]
ADD CONSTRAINT [PK_Applications]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Licenses'
ALTER TABLE [dbo].[Licenses]
ADD CONSTRAINT [PK_Licenses]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Areas'
ALTER TABLE [dbo].[Areas]
ADD CONSTRAINT [PK_Areas]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Files'
ALTER TABLE [dbo].[Files]
ADD CONSTRAINT [PK_Files]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Languages'
ALTER TABLE [dbo].[Languages]
ADD CONSTRAINT [PK_Languages]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Severities'
ALTER TABLE [dbo].[Severities]
ADD CONSTRAINT [PK_Severities]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Categories'
ALTER TABLE [dbo].[Categories]
ADD CONSTRAINT [PK_Categories]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Status'
ALTER TABLE [dbo].[Status]
ADD CONSTRAINT [PK_Status]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Projects_Id], [Brands_Id] in table 'ProjectBrand'
ALTER TABLE [dbo].[ProjectBrand]
ADD CONSTRAINT [PK_ProjectBrand]
    PRIMARY KEY CLUSTERED ([Projects_Id], [Brands_Id] ASC);
GO

-- Creating primary key on [Projects_Id], [Languages_Id] in table 'ProjectLanguage'
ALTER TABLE [dbo].[ProjectLanguage]
ADD CONSTRAINT [PK_ProjectLanguage]
    PRIMARY KEY CLUSTERED ([Projects_Id], [Languages_Id] ASC);
GO

-- Creating primary key on [ProjectsSteamers_Id], [Steamers_Id] in table 'ProjectSteamers'
ALTER TABLE [dbo].[ProjectSteamers]
ADD CONSTRAINT [PK_ProjectSteamers]
    PRIMARY KEY CLUSTERED ([ProjectsSteamers_Id], [Steamers_Id] ASC);
GO

-- Creating primary key on [ProjectsITers_Id], [ITers_Id] in table 'ProjectITers'
ALTER TABLE [dbo].[ProjectITers]
ADD CONSTRAINT [PK_ProjectITers]
    PRIMARY KEY CLUSTERED ([ProjectsITers_Id], [ITers_Id] ASC);
GO

-- Creating primary key on [ProjectsPartners_Id], [Partners_Id] in table 'ProjectPartners'
ALTER TABLE [dbo].[ProjectPartners]
ADD CONSTRAINT [PK_ProjectPartners]
    PRIMARY KEY CLUSTERED ([ProjectsPartners_Id], [Partners_Id] ASC);
GO

-- Creating primary key on [ProjectsParticipants_Id], [Participants_Id] in table 'ProjectParticipants'
ALTER TABLE [dbo].[ProjectParticipants]
ADD CONSTRAINT [PK_ProjectParticipants]
    PRIMARY KEY CLUSTERED ([ProjectsParticipants_Id], [Participants_Id] ASC);
GO

-- Creating primary key on [RequirementsClientSettings_Id], [ClientSettingsFiles_Id] in table 'RequirementClientSettingsFiles'
ALTER TABLE [dbo].[RequirementClientSettingsFiles]
ADD CONSTRAINT [PK_RequirementClientSettingsFiles]
    PRIMARY KEY CLUSTERED ([RequirementsClientSettings_Id], [ClientSettingsFiles_Id] ASC);
GO

-- Creating primary key on [RequirementsServerSettings_Id], [ServerSettingsFiles_Id] in table 'RequirementServerSettingsFiles'
ALTER TABLE [dbo].[RequirementServerSettingsFiles]
ADD CONSTRAINT [PK_RequirementServerSettingsFiles]
    PRIMARY KEY CLUSTERED ([RequirementsServerSettings_Id], [ServerSettingsFiles_Id] ASC);
GO

-- Creating primary key on [Requirements_Id], [Licenses_Id] in table 'RequirementLicense'
ALTER TABLE [dbo].[RequirementLicense]
ADD CONSTRAINT [PK_RequirementLicense]
    PRIMARY KEY CLUSTERED ([Requirements_Id], [Licenses_Id] ASC);
GO

-- Creating primary key on [Requirements_Id], [Roles_Id] in table 'RequirementRole'
ALTER TABLE [dbo].[RequirementRole]
ADD CONSTRAINT [PK_RequirementRole]
    PRIMARY KEY CLUSTERED ([Requirements_Id], [Roles_Id] ASC);
GO

-- Creating primary key on [Requirements_Id], [Areas_Id] in table 'RequirementArea'
ALTER TABLE [dbo].[RequirementArea]
ADD CONSTRAINT [PK_RequirementArea]
    PRIMARY KEY CLUSTERED ([Requirements_Id], [Areas_Id] ASC);
GO

-- Creating primary key on [DefectsDescriptionFiles_Id], [DescriptionFiles_Id] in table 'DefectFileDescriptionFiles'
ALTER TABLE [dbo].[DefectFileDescriptionFiles]
ADD CONSTRAINT [PK_DefectFileDescriptionFiles]
    PRIMARY KEY CLUSTERED ([DefectsDescriptionFiles_Id], [DescriptionFiles_Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [ProjectId] in table 'Requirements'
ALTER TABLE [dbo].[Requirements]
ADD CONSTRAINT [FK_ProjectRequirement]
    FOREIGN KEY ([ProjectId])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectRequirement'
CREATE INDEX [IX_FK_ProjectRequirement]
ON [dbo].[Requirements]
    ([ProjectId]);
GO

-- Creating foreign key on [ProjectId] in table 'Defects'
ALTER TABLE [dbo].[Defects]
ADD CONSTRAINT [FK_ProjectDefect]
    FOREIGN KEY ([ProjectId])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectDefect'
CREATE INDEX [IX_FK_ProjectDefect]
ON [dbo].[Defects]
    ([ProjectId]);
GO

-- Creating foreign key on [Manager_Id] in table 'Projects'
ALTER TABLE [dbo].[Projects]
ADD CONSTRAINT [FK_ProjectManagerUser]
    FOREIGN KEY ([Manager_Id])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectManagerUser'
CREATE INDEX [IX_FK_ProjectManagerUser]
ON [dbo].[Projects]
    ([Manager_Id]);
GO

-- Creating foreign key on [Projects_Id] in table 'ProjectBrand'
ALTER TABLE [dbo].[ProjectBrand]
ADD CONSTRAINT [FK_ProjectBrand_Project]
    FOREIGN KEY ([Projects_Id])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Brands_Id] in table 'ProjectBrand'
ALTER TABLE [dbo].[ProjectBrand]
ADD CONSTRAINT [FK_ProjectBrand_Brand]
    FOREIGN KEY ([Brands_Id])
    REFERENCES [dbo].[Brands]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectBrand_Brand'
CREATE INDEX [IX_FK_ProjectBrand_Brand]
ON [dbo].[ProjectBrand]
    ([Brands_Id]);
GO

-- Creating foreign key on [Projects_Id] in table 'ProjectLanguage'
ALTER TABLE [dbo].[ProjectLanguage]
ADD CONSTRAINT [FK_ProjectLanguage_Project]
    FOREIGN KEY ([Projects_Id])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Languages_Id] in table 'ProjectLanguage'
ALTER TABLE [dbo].[ProjectLanguage]
ADD CONSTRAINT [FK_ProjectLanguage_Language]
    FOREIGN KEY ([Languages_Id])
    REFERENCES [dbo].[Languages]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectLanguage_Language'
CREATE INDEX [IX_FK_ProjectLanguage_Language]
ON [dbo].[ProjectLanguage]
    ([Languages_Id]);
GO

-- Creating foreign key on [ProjectsSteamers_Id] in table 'ProjectSteamers'
ALTER TABLE [dbo].[ProjectSteamers]
ADD CONSTRAINT [FK_ProjectSteamers_Project]
    FOREIGN KEY ([ProjectsSteamers_Id])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Steamers_Id] in table 'ProjectSteamers'
ALTER TABLE [dbo].[ProjectSteamers]
ADD CONSTRAINT [FK_ProjectSteamers_User]
    FOREIGN KEY ([Steamers_Id])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectSteamers_User'
CREATE INDEX [IX_FK_ProjectSteamers_User]
ON [dbo].[ProjectSteamers]
    ([Steamers_Id]);
GO

-- Creating foreign key on [ProjectsITers_Id] in table 'ProjectITers'
ALTER TABLE [dbo].[ProjectITers]
ADD CONSTRAINT [FK_ProjectITers_Project]
    FOREIGN KEY ([ProjectsITers_Id])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [ITers_Id] in table 'ProjectITers'
ALTER TABLE [dbo].[ProjectITers]
ADD CONSTRAINT [FK_ProjectITers_User]
    FOREIGN KEY ([ITers_Id])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectITers_User'
CREATE INDEX [IX_FK_ProjectITers_User]
ON [dbo].[ProjectITers]
    ([ITers_Id]);
GO

-- Creating foreign key on [ProjectsPartners_Id] in table 'ProjectPartners'
ALTER TABLE [dbo].[ProjectPartners]
ADD CONSTRAINT [FK_ProjectPartners_Project]
    FOREIGN KEY ([ProjectsPartners_Id])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Partners_Id] in table 'ProjectPartners'
ALTER TABLE [dbo].[ProjectPartners]
ADD CONSTRAINT [FK_ProjectPartners_User]
    FOREIGN KEY ([Partners_Id])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectPartners_User'
CREATE INDEX [IX_FK_ProjectPartners_User]
ON [dbo].[ProjectPartners]
    ([Partners_Id]);
GO

-- Creating foreign key on [Release_Id] in table 'Projects'
ALTER TABLE [dbo].[Projects]
ADD CONSTRAINT [FK_ProjectRelease]
    FOREIGN KEY ([Release_Id])
    REFERENCES [dbo].[Releases]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectRelease'
CREATE INDEX [IX_FK_ProjectRelease]
ON [dbo].[Projects]
    ([Release_Id]);
GO

-- Creating foreign key on [ProjectsParticipants_Id] in table 'ProjectParticipants'
ALTER TABLE [dbo].[ProjectParticipants]
ADD CONSTRAINT [FK_ProjectParticipants_Project]
    FOREIGN KEY ([ProjectsParticipants_Id])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Participants_Id] in table 'ProjectParticipants'
ALTER TABLE [dbo].[ProjectParticipants]
ADD CONSTRAINT [FK_ProjectParticipants_User]
    FOREIGN KEY ([Participants_Id])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectParticipants_User'
CREATE INDEX [IX_FK_ProjectParticipants_User]
ON [dbo].[ProjectParticipants]
    ([Participants_Id]);
GO

-- Creating foreign key on [BrandId] in table 'Requirements'
ALTER TABLE [dbo].[Requirements]
ADD CONSTRAINT [FK_RequirementBrand]
    FOREIGN KEY ([BrandId])
    REFERENCES [dbo].[Brands]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_RequirementBrand'
CREATE INDEX [IX_FK_RequirementBrand]
ON [dbo].[Requirements]
    ([BrandId]);
GO

-- Creating foreign key on [ApplicationId] in table 'Requirements'
ALTER TABLE [dbo].[Requirements]
ADD CONSTRAINT [FK_RequirementApplication]
    FOREIGN KEY ([ApplicationId])
    REFERENCES [dbo].[Applications]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_RequirementApplication'
CREATE INDEX [IX_FK_RequirementApplication]
ON [dbo].[Requirements]
    ([ApplicationId]);
GO

-- Creating foreign key on [UserId] in table 'Requirements'
ALTER TABLE [dbo].[Requirements]
ADD CONSTRAINT [FK_RequirementTLead]
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_RequirementTLead'
CREATE INDEX [IX_FK_RequirementTLead]
ON [dbo].[Requirements]
    ([UserId]);
GO

-- Creating foreign key on [UserId1] in table 'Requirements'
ALTER TABLE [dbo].[Requirements]
ADD CONSTRAINT [FK_RequirementResponsibleUser]
    FOREIGN KEY ([UserId1])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_RequirementResponsibleUser'
CREATE INDEX [IX_FK_RequirementResponsibleUser]
ON [dbo].[Requirements]
    ([UserId1]);
GO

-- Creating foreign key on [MediaId] in table 'Requirements'
ALTER TABLE [dbo].[Requirements]
ADD CONSTRAINT [FK_RequirementMedia]
    FOREIGN KEY ([MediaId])
    REFERENCES [dbo].[Media]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_RequirementMedia'
CREATE INDEX [IX_FK_RequirementMedia]
ON [dbo].[Requirements]
    ([MediaId]);
GO

-- Creating foreign key on [RequirementsClientSettings_Id] in table 'RequirementClientSettingsFiles'
ALTER TABLE [dbo].[RequirementClientSettingsFiles]
ADD CONSTRAINT [FK_RequirementClientSettingsFiles_Requirement]
    FOREIGN KEY ([RequirementsClientSettings_Id])
    REFERENCES [dbo].[Requirements]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [ClientSettingsFiles_Id] in table 'RequirementClientSettingsFiles'
ALTER TABLE [dbo].[RequirementClientSettingsFiles]
ADD CONSTRAINT [FK_RequirementClientSettingsFiles_File]
    FOREIGN KEY ([ClientSettingsFiles_Id])
    REFERENCES [dbo].[Files]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_RequirementClientSettingsFiles_File'
CREATE INDEX [IX_FK_RequirementClientSettingsFiles_File]
ON [dbo].[RequirementClientSettingsFiles]
    ([ClientSettingsFiles_Id]);
GO

-- Creating foreign key on [RequirementsServerSettings_Id] in table 'RequirementServerSettingsFiles'
ALTER TABLE [dbo].[RequirementServerSettingsFiles]
ADD CONSTRAINT [FK_RequirementServerSettingsFiles_Requirement]
    FOREIGN KEY ([RequirementsServerSettings_Id])
    REFERENCES [dbo].[Requirements]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [ServerSettingsFiles_Id] in table 'RequirementServerSettingsFiles'
ALTER TABLE [dbo].[RequirementServerSettingsFiles]
ADD CONSTRAINT [FK_RequirementServerSettingsFiles_File]
    FOREIGN KEY ([ServerSettingsFiles_Id])
    REFERENCES [dbo].[Files]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_RequirementServerSettingsFiles_File'
CREATE INDEX [IX_FK_RequirementServerSettingsFiles_File]
ON [dbo].[RequirementServerSettingsFiles]
    ([ServerSettingsFiles_Id]);
GO

-- Creating foreign key on [Requirements_Id] in table 'RequirementLicense'
ALTER TABLE [dbo].[RequirementLicense]
ADD CONSTRAINT [FK_RequirementLicense_Requirement]
    FOREIGN KEY ([Requirements_Id])
    REFERENCES [dbo].[Requirements]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Licenses_Id] in table 'RequirementLicense'
ALTER TABLE [dbo].[RequirementLicense]
ADD CONSTRAINT [FK_RequirementLicense_License]
    FOREIGN KEY ([Licenses_Id])
    REFERENCES [dbo].[Licenses]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_RequirementLicense_License'
CREATE INDEX [IX_FK_RequirementLicense_License]
ON [dbo].[RequirementLicense]
    ([Licenses_Id]);
GO

-- Creating foreign key on [Requirements_Id] in table 'RequirementRole'
ALTER TABLE [dbo].[RequirementRole]
ADD CONSTRAINT [FK_RequirementRole_Requirement]
    FOREIGN KEY ([Requirements_Id])
    REFERENCES [dbo].[Requirements]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Roles_Id] in table 'RequirementRole'
ALTER TABLE [dbo].[RequirementRole]
ADD CONSTRAINT [FK_RequirementRole_Role]
    FOREIGN KEY ([Roles_Id])
    REFERENCES [dbo].[Roles]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_RequirementRole_Role'
CREATE INDEX [IX_FK_RequirementRole_Role]
ON [dbo].[RequirementRole]
    ([Roles_Id]);
GO

-- Creating foreign key on [Requirements_Id] in table 'RequirementArea'
ALTER TABLE [dbo].[RequirementArea]
ADD CONSTRAINT [FK_RequirementArea_Requirement]
    FOREIGN KEY ([Requirements_Id])
    REFERENCES [dbo].[Requirements]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Areas_Id] in table 'RequirementArea'
ALTER TABLE [dbo].[RequirementArea]
ADD CONSTRAINT [FK_RequirementArea_Area]
    FOREIGN KEY ([Areas_Id])
    REFERENCES [dbo].[Areas]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_RequirementArea_Area'
CREATE INDEX [IX_FK_RequirementArea_Area]
ON [dbo].[RequirementArea]
    ([Areas_Id]);
GO

-- Creating foreign key on [FileId] in table 'Requirements'
ALTER TABLE [dbo].[Requirements]
ADD CONSTRAINT [FK_FileRequirementScenarioPPT]
    FOREIGN KEY ([FileId])
    REFERENCES [dbo].[Files]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_FileRequirementScenarioPPT'
CREATE INDEX [IX_FK_FileRequirementScenarioPPT]
ON [dbo].[Requirements]
    ([FileId]);
GO

-- Creating foreign key on [BrandId] in table 'Defects'
ALTER TABLE [dbo].[Defects]
ADD CONSTRAINT [FK_DefectBrand]
    FOREIGN KEY ([BrandId])
    REFERENCES [dbo].[Brands]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_DefectBrand'
CREATE INDEX [IX_FK_DefectBrand]
ON [dbo].[Defects]
    ([BrandId]);
GO

-- Creating foreign key on [LanguageId] in table 'Defects'
ALTER TABLE [dbo].[Defects]
ADD CONSTRAINT [FK_DefectLanguage]
    FOREIGN KEY ([LanguageId])
    REFERENCES [dbo].[Languages]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_DefectLanguage'
CREATE INDEX [IX_FK_DefectLanguage]
ON [dbo].[Defects]
    ([LanguageId]);
GO

-- Creating foreign key on [UserId] in table 'Defects'
ALTER TABLE [dbo].[Defects]
ADD CONSTRAINT [FK_DefectUserApplicationEngg]
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_DefectUserApplicationEngg'
CREATE INDEX [IX_FK_DefectUserApplicationEngg]
ON [dbo].[Defects]
    ([UserId]);
GO

-- Creating foreign key on [UserId1] in table 'Defects'
ALTER TABLE [dbo].[Defects]
ADD CONSTRAINT [FK_DefectUserLinguist]
    FOREIGN KEY ([UserId1])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_DefectUserLinguist'
CREATE INDEX [IX_FK_DefectUserLinguist]
ON [dbo].[Defects]
    ([UserId1]);
GO

-- Creating foreign key on [ApplicationId] in table 'Defects'
ALTER TABLE [dbo].[Defects]
ADD CONSTRAINT [FK_DefectApplication]
    FOREIGN KEY ([ApplicationId])
    REFERENCES [dbo].[Applications]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_DefectApplication'
CREATE INDEX [IX_FK_DefectApplication]
ON [dbo].[Defects]
    ([ApplicationId]);
GO

-- Creating foreign key on [DefectsDescriptionFiles_Id] in table 'DefectFileDescriptionFiles'
ALTER TABLE [dbo].[DefectFileDescriptionFiles]
ADD CONSTRAINT [FK_DefectFileDescriptionFiles_Defect]
    FOREIGN KEY ([DefectsDescriptionFiles_Id])
    REFERENCES [dbo].[Defects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [DescriptionFiles_Id] in table 'DefectFileDescriptionFiles'
ALTER TABLE [dbo].[DefectFileDescriptionFiles]
ADD CONSTRAINT [FK_DefectFileDescriptionFiles_File]
    FOREIGN KEY ([DescriptionFiles_Id])
    REFERENCES [dbo].[Files]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_DefectFileDescriptionFiles_File'
CREATE INDEX [IX_FK_DefectFileDescriptionFiles_File]
ON [dbo].[DefectFileDescriptionFiles]
    ([DescriptionFiles_Id]);
GO

-- Creating foreign key on [SeverityId] in table 'Defects'
ALTER TABLE [dbo].[Defects]
ADD CONSTRAINT [FK_SeverityDefect]
    FOREIGN KEY ([SeverityId])
    REFERENCES [dbo].[Severities]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_SeverityDefect'
CREATE INDEX [IX_FK_SeverityDefect]
ON [dbo].[Defects]
    ([SeverityId]);
GO

-- Creating foreign key on [CategoryId] in table 'Defects'
ALTER TABLE [dbo].[Defects]
ADD CONSTRAINT [FK_DefectCategory]
    FOREIGN KEY ([CategoryId])
    REFERENCES [dbo].[Categories]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_DefectCategory'
CREATE INDEX [IX_FK_DefectCategory]
ON [dbo].[Defects]
    ([CategoryId]);
GO

-- Creating foreign key on [StatusId] in table 'Defects'
ALTER TABLE [dbo].[Defects]
ADD CONSTRAINT [FK_DefectStatus]
    FOREIGN KEY ([StatusId])
    REFERENCES [dbo].[Status]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_DefectStatus'
CREATE INDEX [IX_FK_DefectStatus]
ON [dbo].[Defects]
    ([StatusId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------