// eslint-disable-next-line import/no-anonymous-default-export
export default {
    contract: {
        metaData: {
            primaryKeys: ['projectId'],
            keys: [['projectId'], ['email']]
        },
        fields: {
            insertedId: {
                key: false,
                path: 'insertedId',
                dataType: 'string',
                table: [
                    {
                        tableId: 'contract',
                        columnName: '_id'
                    }
                ]
            },
            projectId: {
                key: true,
                path: 'projectId',
                dataType: 'number',
                table: [
                    {
                        tableId: 'contract',
                        columnName: 'projectId'
                    }
                ]
            },
            name: {
                key: false,
                path: 'name',
                dataType: 'string',
                table: [
                    {
                        tableId: 'contract',
                        columnName: 'name'
                    }
                ]
            },
            repoUri: {
                key: false,
                path: 'repoUri',
                dataType: 'string',
                table: [
                    {
                        tableId: 'contract',
                        columnName: 'repoUri'
                    }
                ]
            },
            members: {
                key: false,
                path: 'members',
                dataType: 'array',
                table: [
                    {
                        tableId: 'contract',
                        columnName: 'members'
                    }
                ]
            },
            nameOfToken: {
                key: false,
                path: 'nameOfToken',
                dataType: 'string',
                table: [
                    {
                        tableId: 'contract',
                        columnName: 'nameOfToken'
                    }
                ]
            },
            totalSupply: {
                key: false,
                path: 'totalSupply',
                dataType: 'number',
                table: [
                    {
                        tableId: 'contract',
                        columnName: 'totalSupply'
                    }
                ]
            },
            symbolOfToken: {
                key: false,
                path: 'symbolOfToken',
                dataType: 'string',
                table: [
                    {
                        tableId: 'contract',
                        columnName: 'symbolOfToken'
                    }
                ]
            },
            email: {
                key: true,
                path: 'email',
                dataType: 'string',
                table: [
                    {
                        tableId: 'contract',
                        columnName: 'email'
                    }
                ]
            },
            repoName: {
                key: false,
                path: 'repoName',
                dataType: 'string',
                table: [
                    {
                        tableId: 'contract',
                        columnName: 'repoName'
                    }
                ]
            },
            orgName: {
                key: false,
                path: 'orgName',
                dataType: 'string',
                table: [
                    {
                        tableId: 'contract',
                        columnName: 'orgName'
                    }
                ]
            },
            created: {
                key: false,
                path: 'created',
                dataType: 'date',
                table: [
                    {
                        tableId: 'contract',
                        columnName: 'created'
                    }
                ]
            },
            status: {
                key: false,
                path: 'status',
                dataType: 'string',
                table: [
                    {
                        tableId: 'contract',
                        columnName: 'status'
                    }
                ]
            }
        }
    }
}