<?php


class Rsvp_model extends CI_Model{


    public function get_itemCRUD(){
			$query = $this->db->get("rsvp");
			return $query->result();
    }


    public function insert_item()
    {
        $data = array(
            'nama' => $this->input->post('nama'),
            'no_hp' => $this->input->post('no_hp'),
            'address' => $this->input->post('address'),
            'status' => $this->input->post('status'),
            'pesan' => $this->input->post('pesan')
        );
        return $this->db->insert('rsvp', $data);
			}
}
?>