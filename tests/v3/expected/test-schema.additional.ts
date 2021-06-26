/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/home": {
    get: operations["unifiedhome#home"];
  };
  "/nav": {
    get: operations["unifiedhome#nav"];
  };
  "/status": {
    get: operations["status#status"];
  };
  "/v1/home": {
    get: operations["unifiedhome#home"];
  };
  "/v1/nav": {
    get: operations["unifiedhome#nav"];
  };
}

export interface components {
  schemas: {
    Accountengagementconfig: {
      /** True if the account dashboard is enabled */
      accountDashboard: boolean;
    } & { [key: string]: any };
    Accountperformanceconfig: {
      developmentResources: boolean;
      goals: boolean;
      peerFeedbackInvites: boolean;
      performanceCycles: boolean;
      praise: boolean;
      reviews: boolean;
      selfReflections: boolean;
      teams: boolean;
    } & { [key: string]: any };
    Accountproducts: {
      effectiveness: boolean;
      engagement: boolean;
      performance: boolean;
    } & { [key: string]: any };
    Accountresult: {
      engagementConfig: components["schemas"]["Accountengagementconfig"];
      /** The account's aggregate ID */
      id: string;
      logoUrl?: string;
      name: string;
      performanceConfig: components["schemas"]["Accountperformanceconfig"];
      products: components["schemas"]["Accountproducts"];
      subdomain: string;
    } & { [key: string]: any };
    ErrorInstance: {
      /** Service-specific error code, expressed as a string */
      code?: string;
      /** A human-readable explanation specific to this occurrence of the problem */
      detail?: string;
      /** A unique identifier for this particular occurrence of the problem */
      id?: string;
      /** A a short, human-readable name for the class of errors */
      title: string;
    } & { [key: string]: any };
    /** Access denied */
    Forbidden: {
      errors: components["schemas"]["ErrorInstance"][];
    } & { [key: string]: any };
    /** Data required for the unified home */
    HomeResponseBody: {
      account: components["schemas"]["Accountresult"];
      user: components["schemas"]["Userresult"];
    } & { [key: string]: any };
    /** Information about this build */
    StatusBuildDetails: {
      /** Git branch this version was built from */
      branch?: string;
      /** Git commit hash this version was built from */
      commit?: string;
      /** Buildkite build number */
      number?: string;
      /** Application version */
      version?: string;
    } & { [key: string]: any };
    /** Details of the environment of the application */
    StatusEnvironmentDetails: {
      /** Deployed farm name */
      farm?: string;
      /** URL used to communicate with Manager Labs */
      managerLabsEndpoint?: string;
      /** URL used to communicate with Murmur */
      murmurEndpoint?: string;
      /** URL used to communicate with Performance */
      perfEndpoint?: string;
    } & { [key: string]: any };
    StatusResponse: {
      build?: components["schemas"]["StatusBuildDetails"];
      environment?: components["schemas"]["StatusEnvironmentDetails"];
    } & { [key: string]: any };
    Useravailablethreesixties: {
      /** The date and time when the survey was launched */
      surveyLaunchDate: string;
      /** The name of the 360 survey */
      surveyName: string;
      /** The url for the user's 360 survey process */
      surveyUrl: string;
    } & { [key: string]: any };
    Userresult: {
      /** Available three sixty surveys for the user */
      availableThreeSixties?: components["schemas"]["Useravailablethreesixties"][];
      email?: string;
      /** True if the user has direct reports in Performance */
      hasDirectReports: boolean;
      /** True if the user is permitted to access Skills Coach */
      hasSkillsCoachAccess: boolean;
      /** The account's aggregate ID */
      id: string;
      /** The language set for the user */
      locale?: string;
      name: string;
      profileImageUrl?: string;
      roles: components["schemas"]["Userroles"];
    } & { [key: string]: any };
    Userroles: {
      accountAdmin: boolean;
      /** True if the user has permission to see the account dashboard */
      accountDashboardViewer: boolean;
      hrBusinessPartner: boolean;
      performanceAdmin: boolean;
      surveyAdmin: boolean;
      surveyCreator: boolean;
      surveyDataAnalyst: boolean;
    } & { [key: string]: any };
  };
}

export interface operations {
  "unifiedhome#home": {
    responses: {
      /** OK response. */
      200: {
        content: {
          "application/json": components["schemas"]["HomeResponseBody"];
        };
      };
      /** Forbidden response. */
      403: {
        content: {
          "application/json": components["schemas"]["Forbidden"];
        };
      };
    };
  };
  "unifiedhome#nav": {
    responses: {
      /** OK response. */
      200: {
        content: {
          "application/json": components["schemas"]["HomeResponseBody"];
        };
      };
      /** Forbidden response. */
      403: {
        content: {
          "application/json": components["schemas"]["Forbidden"];
        };
      };
    };
  };
  "status#status": {
    responses: {
      /** OK response. */
      200: {
        content: {
          "application/json": components["schemas"]["StatusResponse"];
        };
      };
    };
  };
}

export interface external {}
