import { DefaultAzureCredential } from "@azure/identity";

import { SecretClient } from "@azure/keyvault-secrets";

const vaultUrl = "https://dev-kv4iris.vault.azure.net/";

const fs = window.require("fs");

let authRecord;

try {
  const creds = JSON.parse(fs.readFileSync(".env"));

  authRecord = {
    authority: creds.authority,

    clientId: creds.client_id,

    username: creds.username,

    tenantId: creds.tenant_id,

    homeAccountId: creds.home_account_id
  };
} catch (e) {
  const { InteractiveBrowserCredential } = require("@azure/identity");

  const browserCredential = new InteractiveBrowserCredential();

  authRecord = await browserCredential.authenticate();

  fs.writeFileSync(
    ".env",

    JSON.stringify({
      authority: authRecord.authority,

      client_id: authRecord.clientId,

      username: authRecord.username,

      tenant_id: authRecord.tenantId,

      home_account_id: authRecord.homeAccountId
    })
  );
}

const vaultCredentials = new DefaultAzureCredential({
  authenticationRecord: authRecord,

  excludeSharedTokenCacheCredential: false
});

const vaultClient = new SecretClient(vaultUrl, vaultCredentials);


const secretName = "jwt-key";


