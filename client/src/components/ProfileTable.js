import React from 'react'
import { Query } from 'react-apollo'
import Moment from 'react-moment'

import { Table, Icon } from 'antd'
import { GET_ALL_PROFILES } from '../queries'

const ProfileTable = () => (
  <Query query={GET_ALL_PROFILES}>
    {({ loading, error, data }) => {
      const columns = [
        {
          title: 'CREATED DATE',
          dataIndex: 'recordDate',
          align: 'left',
          render: date => (
            <Moment format="YYYY-MM-DD &nbsp;&nbsp;HH:MM">{date}</Moment>
          )
        },
        {
          title: 'FULLNAME',
          dataIndex: 'fullName',
          align: 'left'
        },
        {
          title: 'STADIUM',
          dataIndex: 'stadium',
          align: 'right'
        },
        {
          title: 'TIME',
          dataIndex: 'selectedTime',
          align: 'right'
        },
        {
          title: 'LEVEL',
          dataIndex: 'level',
          align: 'right'
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
        {
          title: 'JOB',
          dataIndex: 'job',
          align: 'right'
        },
        {
          title: 'FAVORITE TEAM',
          dataIndex: 'favoriteTeam',
          align: 'right'
        }
      ]
      return (
        <div>
          <div>
            {' '}
            <h2>Profile Detail</h2>{' '}
            <h3 style={{ float: 'right', marginRight: 40, marginTop: -45 }}>
              <Icon type="user" style={{ fontSize: 25, color: '#3EC8C3' }} />{' '}
              Total:
            </h3>
          </div>
          <Table
            columns={columns}
            dataSource={data.getAllProfiles}
            size="middle"
          />
        </div>
      )
    }}
  </Query>
)

// class ProfileTable extends React.Component {
//   render() {
//     const columns = [
//       {
//         title: 'CREATED DATE',
//         dataIndex: 'createdDate',
//         align: 'left'
//       },
//       {
//         title: 'FULLNAME',
//         dataIndex: 'fullName',
//         align: 'left'
//       },
//       {
//         title: 'STADIUM',
//         dataIndex: 'stadium',
//         align: 'right'
//       },
//       {
//         title: 'TIME',
//         dataIndex: 'selectedTime',
//         align: 'right'
//       },
//       {
//         title: 'LEVEL',
//         dataIndex: 'selectedTime',
//         align: 'right'
//       },
//       {
//         title: 'STYLE',
//         dataIndex: 'selectedTime',
//         align: 'right'
//       },
//       {
//         title: 'AGE',
//         dataIndex: 'selectedTime',
//         align: 'right'
//       },
//       {
//         title: 'JOB',
//         dataIndex: 'selectedTime',
//         align: 'right'
//       },
//       {
//         title: 'FAVORITE TEAM',
//         dataIndex: 'selectedTime',
//         align: 'right'
//       }
//     ]
//     const data = [
//       //   {
//       //     createdDate: '1',
//       //     fullName: '1',
//       //     stadium: '1',
//       //     selectedTime: '1'
//       //   }
//     ]
//     return (
//           <div>
//             <div>
//               {' '}
//               <h2>Profile Detail</h2>{' '}
//               <h3 style={{ float: 'right', marginRight: 40, marginTop: -45 }}>
//                 <Icon type="user" style={{ fontSize: 25, color: '#3EC8C3' }} />{' '}
//                 Total:
//               </h3>
//             </div>
//             ;
//             <Table
//               columns={columns}
//               dataSource={data.getAllProfiles}
//               size="middle"
//             />
//           </div>
//     )
//   }
// }

export default ProfileTable
