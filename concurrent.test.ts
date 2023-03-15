  const blacklistEntitiesConcurrently = async (createIfNotExists = false): Promise<void> => {
    const concurrentTest = new ConcurrentTest([
      async function (): Promise<Model | void> {
        return loopBlacklistEntity('http://www.google.cn', DBEntityType.LINK, createIfNotExists)
      },
      async function (): Promise<Model | void> {
        return loopBlacklistEntity(
          'http://www.google.com/?gws_rd=ssl',
          DBEntityType.LINK,
          createIfNotExists
        )
      },
      async function (): Promise<Model | void> {
        return loopBlacklistEntity(
          'http://www.google.com/?gws_rd=ssl&agent=mobile',
          DBEntityType.LINK,
          createIfNotExists
        )
      },
      async function (): Promise<Model | void> {
        return loopBlacklistEntity('13877677', DBEntityType.CONTACT, createIfNotExists)
      },
      async function (): Promise<Model | void> {
        return loopBlacklistEntity('73877677', DBEntityType.CONTACT, createIfNotExists)
      },
      async function (): Promise<Model | void> {
        return createMessageReport({
          sender: '73877677',
          message: message1,
          report_source: 'form',
          message_source: 'sms',
        })
      },
      async function (): Promise<Model | void> {
        return createMessageReport({
          sender: '73877677',
          message: message1,
          report_source: 'form',
          message_source: 'sms',
        })
      },
      async function (): Promise<Model | void> {
        return createMessageReport({
          sender: '73877677',
          message: message2,
          report_source: 'form',
          message_source: 'sms',
        })
      },
      async function (): Promise<Model | void> {
        return createMessageReport({
          sender: '73877677',
          message: message3,
          report_source: 'form',
          message_source: 'sms',
        })
      },
      async function (): Promise<Model | void> {
        return createCallReport({
          caller: '73877677',
          description: 'xxxxx',
          report_source: 'form',
          call_source: 'sms',
        })
      },
    ])
