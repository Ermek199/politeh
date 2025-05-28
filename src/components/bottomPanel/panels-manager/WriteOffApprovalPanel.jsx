import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Div, Text, Button } from "atomize";
import {
  approveWriteOffRequest,
  rejectWriteOffRequest,
} from "../../redux/actions/writeOffRequestsActions";

const WriteOffApprovalPanel = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.writeOffRequests.requests);

  return (
    <Div p="1rem">
      <Text tag="h3" m={{ b: "1rem" }}>
        Согласование списаний
      </Text>
      {requests.length === 0 && <Text>Нет заявок на согласование.</Text>}
      {requests.map((req) => (
        <Div
          key={req.id}
          border="1px solid #ccc"
          p="1rem"
          mb="1rem"
          borderRadius="8px"
        >
          <Text>
            <b>Дата:</b> {req.timestamp}
          </Text>
          <Text>
            <b>Пользователь:</b> {req.user}
          </Text>
          <Text>
            <b>Статус:</b> {req.status}
          </Text>
          <Text>
            <b>Товары:</b>
          </Text>
          {req.items.map((item) => (
            <Text key={item.id}>
              - {item.name} (Артикул: {item.sku}), Кол-во: {item.quantity}, Цена
              за ед.: {item.pricePerUnit} сом
            </Text>
          ))}

          {req.status === "pending" && (
            <Div d="flex" mt="0.5rem" justify="flex-end">
              <Button
                bg="success700"
                hoverBg="success800"
                m={{ r: "0.5rem" }}
                onClick={() => dispatch(approveWriteOffRequest(req.id))}
              >
                Одобрить
              </Button>
              <Button
                bg="danger700"
                hoverBg="danger800"
                textColor="white"
                onClick={() => dispatch(rejectWriteOffRequest(req.id))}
              >
                Отклонить
              </Button>
            </Div>
          )}
        </Div>
      ))}
    </Div>
  );
};

export default WriteOffApprovalPanel;
