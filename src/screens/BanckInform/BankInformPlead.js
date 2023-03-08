import { link } from 'fs';
import React, { useState, useEffect, useCallback } from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';
import { PlaidLink } from 'react-native-plaid-link-sdk';

export function BankInformPlead({ navigation }) {
  const [linkToken, setLinkToken] = useState(null);
  const address = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';

  const createLinkToken = React.useCallback(async () => {
    await fetch(`http://${address}:8000/api/create_link_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLinkToken(data.link_token);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setLinkToken]);
  React.useEffect(() => {
    if (linkToken == null) {
      createLinkToken();
    }
  }, [linkToken]);

  return (
    <PlaidLink
      tokenConfig={{
        token: linkToken,
      }}
      onSuccess={(success) => {
        console.log(success);
      }}
      onExit={(exit) => {
        console.log(exit);
      }}
    >
      <Text>Add Account</Text>
    </PlaidLink>
  );
}
