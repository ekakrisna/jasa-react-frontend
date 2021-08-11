import styled from "styled-components";
import { colors } from "../../styles/_variables";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import Select from "../Elements/Select";

const Form = styled.div`
  border: 1px solid ${colors.secondary};
  border-radius: 0 10px 10px 10px;
`;

const Title = styled.div`
  border: 1px solid ${colors.secondary};
  border-radius: 10px 10px 0 0;
  margin-bottom: -1px;
`;

export default function FormIdentity() {
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-10 mb-0 d-flex px-0">
          <Title className="px-4 py-2">
            <strong>Isi Identitas</strong>
          </Title>
        </div>
        <Form className="col-md-10 p-4">
          <form>
            <div className="row">
              <div className="col-6">
                <Input
                  type="text"
                  label="Nama Depan"
                  placeholder="Masukan nama depan"
                />
              </div>
              <div className="col-6">
                <Input
                  type="text"
                  label="Nama Belakang"
                  placeholder="Masukan nama belakang"
                />
              </div>
              <div className="col-6">
                <Input
                  type="text"
                  label="Username"
                  placeholder="Masukan username"
                />
              </div>
              <div className="col-6">
                <Input
                  type="text"
                  label="Phone"
                  placeholder="Masukan nomor telepon"
                />
              </div>
              <div className="col-6">
                <Select label="Gender">
                  <option value="first">First</option>
                </Select>
              </div>
              <div className="col-6">
                <p className="mb-2">Date of Birth</p>
                <div className="row">
                  <div className="col-4">
                    <Select>
                      <option value="first">First</option>
                    </Select>
                  </div>
                  <div className="col-4">
                    <Select>
                      <option value="first">First</option>
                    </Select>
                  </div>
                  <div className="col-4">
                    <Select>
                      <option value="first">First</option>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <Input
                  type="password"
                  label="Kata Sandi"
                  placeholder="Masukan kata sandi"
                />
              </div>
              <div className="col-6">
                <Input
                  type="password"
                  label="Konfirmasi Kata Sandi"
                  placeholder="Masukan konfirmasi kata sandi"
                />
              </div>
              <div className="col-12 text-center pt-3">
                <Button>Masuk</Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
