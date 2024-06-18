import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const Table = ({ title, tabelData }) => {
  const { header, body, fieldNames } = tabelData;
  console.log(fieldNames);

  return (
    <div className="w-1/2">
      <div className="rounded-t-[8px] bg-green-background p-[20px]">
        {title}
      </div>
      <table>
        <thead>
          <tr>
            {header?.map((item) => (
              <th className="bg-white" key={item}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body?.map((item) => {
            return (
              <tr key={item._id}>
                {fieldNames?.map((itemRow) => (
                  <td className="bg-white" key={nanoid()}>
                    {item[itemRow]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  title: PropTypes.string,
  tabelData: PropTypes.object,
};
