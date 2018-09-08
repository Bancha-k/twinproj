import React from 'react'
import { Query } from 'react-apollo'
import Moment from 'react-moment'

import { Table, Icon } from 'antd'
import { GET_ALL_PROFILES } from '../queries'

const ProfileTable = props => (
  <Query query={GET_ALL_PROFILES}>
    {({ loading, error, data }) => {
      const columns = [
        {
          title: 'CREATED DATE',
          dataIndex: 'recordDate',
          align: 'left',
          render: date => (
            <Moment format="YYYY-MM-DD &nbsp;&nbsp;HH:mm">{date}</Moment>
          ),
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.recordDate - b.recordDate
        },
        {
          title: 'FULLNAME',
          dataIndex: 'fullName',
          align: 'left'
        },
        {
          title: 'STADIUM',
          dataIndex: 'stadium',
          align: 'right',
          filters: [
            {
              text: 'Stadium 1',
              value: 'Stadium 1'
            },
            {
              text: 'Stadium 2',
              value: 'Stadium 2'
            },
            {
              text: 'Stadium 3',
              value: 'Stadium 3'
            },
            {
              text: 'Stadium 4',
              value: 'Stadium 4'
            }
          ],
          onFilter: (value, record) => record.stadium.indexOf(value) === 0
        },
        {
          title: 'TIME',
          dataIndex: 'selectedTime',
          align: 'right'
        },
        {
          title: 'LEVEL',
          dataIndex: 'level',
          align: 'right',
          filters: [
            {
              text: 'Low',
              value: 'Low'
            },
            {
              text: 'Medium',
              value: 'Medium'
            },
            {
              text: 'High',
              value: 'High'
            }
          ],
          onFilter: (value, record) => record.level.indexOf(value) === 0
        },
        {
          title: 'STYLE',
          dataIndex: 'style',
          align: 'right'
        },
        {
          title: 'AGE',
          dataIndex: 'age',
          align: 'right'
        },
        // {
        //   title: 'JOB',
        //   dataIndex: 'age',
        //   align: 'right'
        // },
        {
          title: 'FAVORITE TEAM',
          dataIndex: 'favoriteTeam',
          align: 'right'
        }
      ]

      function onChange(pagination, filters, sorter) {
        console.log('params', pagination, filters, sorter)
      }
      return (
        <div>
          <div>
            {' '}
            <h2>Profile Detail</h2>{' '}
            <h3 style={{ float: 'right', marginRight: 40, marginTop: -45 }}>
              <Icon type="user" style={{ fontSize: 25, color: '#3EC8C3' }} />{' '}
              Total: {data.getAllProfiles ? data.getAllProfiles.length : 0}
            </h3>
          </div>
          <Table
            style={{ marginBottom: -10 }}
            columns={columns}
            rowKey={record => record._id}
            dataSource={
              props.dataSearch ? props.dataSearch : data.getAllProfiles
            }
            size="middle"
            onChange={onChange}
          />
        </div>
      )
    }}
  </Query>
)

export default ProfileTable
